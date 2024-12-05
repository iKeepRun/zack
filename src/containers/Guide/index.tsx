import {  useEffect, useRef } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Guide(){
    const ref=useRef<HTMLDivElement>(null!);
    useEffect(()=>{
      ref.current.style.opacity="1";
    },[])

    const navigate=useNavigate();
    function handleIconClick(){
       navigate("/login");
    }
    return (
  
      <div ref={ref} className="page guide-page">
         <img alt="欢乐购" className="main-pic" src ={require('../../img/logo_@2x.png')} />
         <p className="title">欢乐购</p>
         <img alt="欢乐购" className="sub-pic" src ={require('../../img/slogn_word_icon_@2x.png')} />
         <div className="iconfont arrow-icon" onClick={handleIconClick}>&#xe60c;</div>
      </div>
    );
}

export default Guide;