import { ResponseType } from "./type";
import "./style.scss"
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";





function SearchList() {
    const params=useParams()
  
    const defaultRequest = {
        url: "/get_search_list.json",
        method: "POST",
        data: {
            shopId:params.shopId,
            keyword:params.keyword,
            type:"default"
        }
    }

    const [tab,setTab]=useState("default")
    const [keyword, setKeyword] = useState(params.keyword);
    const [requestData, setRequestData] = useState(defaultRequest)
    var { data } = useRequest<ResponseType>(requestData)
    const productList = data?.data || [];
    var navigate=useNavigate()

    function handleSearchClear() {
        setKeyword("")
    }

    function handleSearchInput(k:string) {
        if (k === "Enter"&&keyword) {
            const localhistory=localStorage.getItem("historyList");
            if(localhistory){
               const newlist=[keyword, ...JSON.parse(localhistory)]
               localStorage.setItem("historyList",JSON.stringify(newlist))
            }
           
            const newRequestData = { ...defaultRequest,data:{...defaultRequest.data, keyword:keyword} }
            setRequestData(newRequestData)
        }
    }
    function handleSubClick(type:string){
       setTab(type);
       const newRequestData={...defaultRequest,data:{...defaultRequest.data,type:type}}
       setRequestData(newRequestData)
    }
return (
    <div className="page searchlist-page">
        <div className="title">
            <Link to={`/search/${params.shopId}`} className="title-back">
                <div className="iconfont title-icon" >&#xe600;</div>
            </Link>
            <input className="iconfont title-input"
                placeholder="&#xe60e;请输入商品名字"
                value={keyword}
                onChange={(e) => { setKeyword(e.target.value) }}
                onKeyDown={(k) => { handleSearchInput(k.key) }}
            />
            <div className="search-clear iconfont" onClick={handleSearchClear}>&#xe610;</div>
        </div>

        <div className="sub">
            <span className={tab==="default"?"sub-item actived":"sub-item"} onClick={()=>{handleSubClick("default")}}>默认</span>
            <span  className={tab==="sales"?"sub-item actived":"sub-item"} onClick={()=>{handleSubClick("sales")}}>销量</span>
            <span  className={tab==="prices"?"sub-item actived":"sub-item"} onClick={()=>{handleSubClick("prices")}}>价格</span>
        </div>

        <ul className="product-list">
            {productList.map((item) => {
                return (
                    <li className="product-item" onClick={()=>{navigate(`/detail/${item.id}`)}} key={item.id}>
                        <img className="product-item-img" src={item.imgUrl} alt="" />
                        <div className="product-item-detail">
                            <p className="product-item-desc">{item.name}</p>
                            <div className="product-item-price">
                                <span className="yen">&yen;</span>{item.price}
                                <span className="sales" >已售 {item.sales}</span>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
        <div className="bottom">- 我是有底线的 -</div>
    </div>)
}


export default SearchList;