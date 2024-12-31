import { ResponseType } from "./type"
import "./style.scss"
import { useNavigate, useParams } from "react-router-dom"
import useRequest from "../../hooks/useRequest"
import { useState } from "react"
import Popup from "../../components/Popup"


const defaultData = {
    url: '/detail.json',
    method: "POST",
    id: ""
}

function Detail() {

    const [show,setShow]=useState(false)
    var params = useParams()
    var navigate = useNavigate()
    if (params.id) {
        defaultData.id = params.id;
    }

    const { data } = useRequest<ResponseType>(defaultData);
    const res = data?.data|| null;
    return res? (
        <div className="page detail-page">
            <div className="title">
                <div className="iconfont back-icon" onClick={() => { navigate(-1) }}>&#xe600;</div>
                商品详情
            </div>
            <img className="img" src="http://statics.dell-lee.com/shopping/detail.png" alt="" />
            <div className="base">
                <div className="base-price"> <span className="yen">&yen;</span>{res.price}</div>
                <div className="base-sales"> 已售 {res?.sales}</div>
            </div>
            <div className="details">
                <p className="details-desc">{res.title}</p>
                <p className="details-taste">{res.subtitle}</p>
                <div className="details-discounts">
                    <span className="details-discounts-title">领券</span>
                    <span className="iconfont">&#xe60f; 满100减50</span>
                    <span className="iconfont">&#xe60f; 满200减100</span>
                </div>
                <div className="details-spec">
                    <p className="details-spec-title">规格信息</p>
                    <div className="details-spec-detail">
                        <div className="spec-detail-item">
                            <div className="spec-detail-item-title">产地</div>
                            <div className="spec-detail-item-info">{res.origin}</div>
                        </div>
                        <div className="spec-detail-item">
                            <div className="spec-detail-item-title">规格</div>
                            <div className="spec-detail-item-info">{res.specification}</div>
                        </div>
                    </div>

                </div>
                <div className="category-detail">
                    <div className="category-detail-title">商品详情</div>
                    <p className="category-detail-desc">{res.detail}</p>
                </div>
                <div className="card">
                    <div className="card-left">
                        <div className="card-icon iconfont">&#xe70b;</div>
                        <div className="card-name"> 购物车</div>
                    </div>
                    <div className="card-right" onClick={()=>setShow(true)}>加入购物车</div>
                </div>
            </div>
           <Popup show={show} clickCallback={()=>{setShow(false)}} >
                 <div className="cart">
                    <div className="cart-content">
                        <img className="cart-content-img"src={res.imgUrl} alt=""></img>
                        <div className="cart-content-info">
                            <div className="cart-content-title">{res.title}</div>
                            <div className="cart-content-price"><span className="yen">&yen;</span>{res.price}</div>
                        </div>
                       
                    </div>
                    <div className="cart-count">
                        购买数量
                        <div className="cart-count-btn">
                            <span className="cart-count-btn-item">+</span>
                            <span className="cart-count-btn-count">18</span>
                            <span className="cart-count-btn-item">-</span>
                        </div>
                        
                    </div>
                    <div className="cart-btn">加入购物车</div>
                 </div>
            </Popup>
        </div>):null
}

 
export default Detail