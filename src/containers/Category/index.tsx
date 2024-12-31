import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import "./style.scss"
import { CategorySearchListType, TagResponseType } from "./type";
import { message } from "../../utils/message";
import Docker from "../../components/Docker";
import { useNavigate } from "react-router-dom";


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
    const navigate=useNavigate()
    const [categories, setCategories] = useState<Array<{ id: string, name: string }>>([])
    const [tags, setTags] = useState<Array<string>>()

    const [keyword, setKeyword] = useState("")
    const [requestData, setRequestData] = useState(defaultRequestParam)

    const [currentTag,setCurrentTag]=useState("");
    const [currentCategory,setCurrentCategory]=useState("");

    const { request } = useRequest<TagResponseType>({ manual: true })
    const { data } = useRequest<CategorySearchListType>(requestData)

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
        setRequestData((prevData)=>({
            ...prevData,data:{...prevData.data,tag:name}
          }) )
    }

    function handleCategoryClick(name: string) {
        setCurrentCategory(name)
        setRequestData((prevData)=>({
            ...prevData,data:{...prevData.data,category: name }
          }) )
    }
    function handleKeyWordClick(s: string) {
        if (s === "Enter") {
            setRequestData((prevData)=>({
                ...prevData,data:{...prevData.data, keyword: keyword }
              }) )
        }
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
            <div className={currentCategory===""||currentCategory==="全部商品"?"category-item category-item-active":"category-item"}
            onClick={()=>{setCurrentCategory("全部商品")}}
            >全部商品</div>
            {
                categories.map(item => {
                    return (
                        <div className={currentCategory===item.name?"category-item category-item-active":"category-item"} key={item.id} onClick={() => { handleCategoryClick(item.name) }}>{item.name}</div>
                    )
                })
            }
        </div>
        <div className="tag">
            <div className={currentTag===""||currentTag==="全部"?"tag-item tag-item-active":"tag-item"} 
            onClick={()=>{setCurrentTag("全部")}}
            >全部</div>
            {tags?.map((item, index) => {
                return (
                    <div className={currentTag===item?"tag-item tag-item-active":"tag-item"} key={item + index} onClick={() => { handleTagClick(item) }}>{item}</div>
                )
            })}
        </div>
        <div className="product">
            <div className="product-category">精选商品（{data?.data.length}）</div>
            {data?.data.map(item => {
                return (
                    <div className="product-item" onClick={()=>{navigate(`/detail/${item.id}`)}}>
                        <img className="product-item-img" src={item.imgUrl} alt={item.title} />
                        <div className="product-item-content">
                            <div className="product-item-title">{item.title}</div>
                            <div className="product-item-sales">已售{item.sales}</div>
                            <div className="product-item-price"><span className="yen">&yen;</span>{item.price}</div>
                            <div className="product-item-btn">购买</div>
                        </div>
                    </div>
                )
            })}


        </div>
        <Docker name="category" />
    </div>)
}

export default Category;