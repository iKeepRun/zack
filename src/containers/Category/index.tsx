import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import "./style.scss"
import { CategorySearchListType,  ProductCartInfoRespType, TagResponseType } from "./type";
import { message } from "../../utils/message";
import Docker from "../../components/Docker";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";
import { UpdateCartResponseType } from "../Detail/type";


const defaultRequestParam = {
    url: "/category_search_list.json",
    method: "POST",
    data: {
        keyword: "",
        tag: "",
        category: ""
    }
}

function Category() {
    console.log("category page begin")
    const navigate = useNavigate()
    const [categories, setCategories] = useState<Array<{ id: string, name: string }>>([])
    const [tags, setTags] = useState<Array<string>>()

    const [keyword, setKeyword] = useState("")
    const [requestData, setRequestData] = useState(defaultRequestParam)

    const [currentTag, setCurrentTag] = useState("");
    const [currentCategory, setCurrentCategory] = useState("");

    const { request } = useRequest<TagResponseType>({ manual: true })
    const { data } = useRequest<CategorySearchListType>(requestData)
    const [show, setShow] = useState(false);
    const [productCartInfo,setProductCartInfo]=useState({
        id:"",
        imgUrl:"",
        title:"",
        price:0,
        count:0
    });

    const [count, setCount] = useState(0)
    // console.log("xxx", data)
    useEffect(() => {
        request({
            url: "/categoryAndTagList.json",
            method: "GET"
        }).then((response) => {
            console.log("xxx", response)
            setCategories(response.data.category)
            setTags(response.data.tag)

            // console.log(categories)
            // console.log(tags)
        }).catch((e: any) => {
            message(e.message)
        })

    }, [request])


    function handleTagClick(name: string) {
        setCurrentTag(name)
        setRequestData((prevData) => ({
            ...prevData, data: { ...prevData.data, tag: name }
        }))
    }

    function handleCategoryClick(name: string) {
        setCurrentCategory(name)
        setRequestData((prevData) => ({
            ...prevData, data: { ...prevData.data, category: name }
        }))
    }
    function handleKeyWordClick(s: string) {
        if (s === "Enter") {
            setRequestData((prevData) => ({
                ...prevData, data: { ...prevData.data, keyword: keyword }
            }))
        }
    }

    const {request:productCartInfoRequest}=useRequest<ProductCartInfoRespType>({manual:true})
    function handleClickBuy(e: React.MouseEvent<HTMLDivElement, MouseEvent>,productId:string) {
        //stop prop
        e.stopPropagation()
        setShow(true)

        productCartInfoRequest(
            {
                url:"/productCartInfo.json",
                method:"POST",
                data:{
                    id:productId
                }
            }
        ).then((resp)=>{
            setProductCartInfo(resp.data)
        }).catch(e=>{message(e.message)})

    }

    const { request: updateRequest } = useRequest<UpdateCartResponseType>()
    function updateCart(productId: string) {
        updateRequest({
            url: "update_cart.json",
            method: "POST",
            data: {
                id: productId,
                count: productCartInfo.count
            }
        }).then((resp) => {
            console.log(resp.data)
            setShow(false)
            //fake update
            // in fact,another query should be made here
            setCount(count)

        }).catch((e) => { message(e.message) })
    }

    function changeCount(count: number) {
        if (count > 0) {
            setProductCartInfo((prevData) => ({
                ...prevData, count:count
            }))
          
        } else {
            setProductCartInfo((prevData) => ({
                ...prevData, count: 0 
            }))
        }
    }


    function clickCallBack() {
        setShow(false)
        setCount(0)
    }
    return (<div className="page category-page">
        <div className="title">
            <div className="iconfont">&#xe60e;</div>
            <input className="title-input"
                placeholder="请输入商品名字"
                value={keyword}
                onChange={(e) => { setKeyword(e.target.value) }}
                onKeyDown={(k) => { handleKeyWordClick(k.key) }}
            />
        </div>
        <div className="category">
            <div className={currentCategory === "" || currentCategory === "全部商品" ? "category-item category-item-active" : "category-item"}
                onClick={() => { setCurrentCategory("全部商品") }}
            >全部商品</div>
            {
                categories.map(item => {
                    return (
                        <div className={currentCategory === item.name ? "category-item category-item-active" : "category-item"} key={item.id} onClick={() => { handleCategoryClick(item.name) }}>{item.name}</div>
                    )
                })
            }
        </div>
        <div className="tag">
            <div className={currentTag === "" || currentTag === "全部" ? "tag-item tag-item-active" : "tag-item"}
                onClick={() => { setCurrentTag("全部") }}
            >全部</div>
            {tags?.map((item, index) => {
                return (
                    <div className={currentTag === item ? "tag-item tag-item-active" : "tag-item"} key={item + index} onClick={() => { handleTagClick(item) }}>{item}</div>
                )
            })}
        </div>
        <div className="product">
            <div className="product-category">精选商品（{data?.data.length}）</div>
            {data?.data.map(item => {
                return (
                    <div className="product-item" onClick={() => { navigate(`/detail/${item.id}`) }}>
                        <img className="product-item-img" src={item.imgUrl} alt={item.title} />
                        <div className="product-item-content">
                            <div className="product-item-title">{item.title}</div>
                            <div className="product-item-sales">已售{item.sales}</div>
                            <div className="product-item-price"><span className="yen">&yen;</span>{item.price}</div>
                            <div className="product-item-btn" onClick={(e) => { handleClickBuy(e,item.id) }}>购买</div>
                        </div>
                    </div>
                )
            })}


        </div>
        <Docker name="category" />
        <Popup show={show} clickCallback={() => clickCallBack()}>
            <div className="cart">
                <div className="cart-content">
                    <img className="cart-content-img" src={productCartInfo.imgUrl} alt=""></img>
                    <div className="cart-content-info">
                        <div className="cart-content-title">{productCartInfo.title}</div>
                        <div className="cart-content-price"><span className="yen">&yen;</span>{productCartInfo.price}</div>
                    </div>

                </div>
                <div className="cart-count">
                    购买数量
                    <div className="cart-count-btn">
                        <span className="cart-count-btn-item" onClick={() => changeCount(productCartInfo.count + 1)}>+</span>
                        <span className="cart-count-btn-count">{productCartInfo.count}</span>
                        <span className="cart-count-btn-item" onClick={() => changeCount(productCartInfo.count - 1)}>-</span>
                    </div>
                </div>
                <div className="cart-btns">
                    <div className="cart-btn-left" onClick={() => updateCart(productCartInfo.id)}>加入购物车</div>
                    <div className="cart-btn-right" onClick={()=>updateCart(productCartInfo.id)}>立即购买</div>
                </div>
            </div>
        </Popup>

    </div>)
}

export default Category;