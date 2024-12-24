import { data, useNavigate } from "react-router-dom";
import "./style.scss"
import useRequest from "../../hooks/useRequest";
import { useState } from "react";
import type { ResponseType } from "./type";


const locallocation=localStorage.getItem("location")
const localtionHistory=locallocation?JSON.parse(locallocation):null;


const defaultRequestData = {
    url: '/nearby.json',
    method: 'POST',
    data:{
        latitude:localtionHistory?localtionHistory.latitude:370.2,
        longitude:localtionHistory?localtionHistory.longitude:70,
    }
}


function Nearby() {
    const navigate=useNavigate();
    const [keyword,setKeyword]=useState("");
    const { data } = useRequest<ResponseType>(defaultRequestData);
  
    const list=data?.data ||[];

    function handleItemClick(latitude:string,longitude:string){
       localStorage.setItem('location',JSON.stringify({
        latitude,
        longitude
       }));

       navigate("/home")
    }
    return (
        <div className="page nearby-page">
            <div className="title">
                <div className="iconfont title-icon" onClick={()=>{navigate("/home")}}>&#xe600;</div>切换门店
            </div>
            <div className="search">
                <span className="iconfont search-icon">&#xe60e;</span>
                <input className="search-input"
                value={keyword}
                onChange={(e)=>{setKeyword(e.target.value)}}
                       placeholder="请输入地址"
                />
            </div>

           
            <div className="subtitle">附近门店</div>
            <ul className="list" >
                {list.map((item)=>{
                    return (
                        <li className="list-item" onClick={()=>{handleItemClick(item.latitude,item.longitude)}}>
                        <div className="list-item-title">{item.name}</div>
                        <div className="list-item-phone">联系电话:{item.phone}</div>
                        <div className="list-item-address">{item.address}</div>
                        <div className="list-item-position">
                            <div className="iconfont list-item-position-icon">&#xe603; </div>782m
                        </div>
                     </li>
                    )
                })}
               
            </ul>

        </div>
    )
}

export default Nearby;