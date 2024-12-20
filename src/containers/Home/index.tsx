import "./style.scss"
import 'swiper/css';
import type { ResponseType } from "./type";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import useRequest from "../../hooks/useRequest";
// import { message } from "../../utils/message";




const locallocation=localStorage.getItem("location");
const historyLocation=locallocation?JSON.parse(locallocation):null;

const defaultRequestData={
    url: '/home.json',
        method:'POST',
        data:{
            latitude:historyLocation?historyLocation.latitude:37.7304167,
            longitude:historyLocation?historyLocation.longitude:-122.384425
        }
}

function Home() {
    const [page,setPage]=useState(1);
    const [requestData,setRequestData]=useState(defaultRequestData)
    const {data} =useRequest<ResponseType>(requestData);
    //当定位发生改变的时候，访问后端接口重新获取所在位置 
    useEffect(()=>{
        if(navigator.geolocation&&!locallocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log("cccc",position)
                const {coords}=position;
                const {latitude,longitude}=coords;
            
                setRequestData({...defaultRequestData,data:{latitude,longitude}})
                
                localStorage.setItem("location",JSON.stringify(coords))
            },()=>{console.log()},{timeout:3000})
        }
    },[])
    return (
        <div className="page home-page">
            <div className="banner">
                <div className="location">
                    <span className="iconfont" >&#xe83d;</span>
                    {data?.data.location.address||''}
                </div>
                <div className="search">
                    <span className="iconfont" >&#xe73d;</span>
                    请输入你需要搜索的内容
                </div>
                <div className="swiper-area">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper:SwiperType) => setPage(swiper.activeIndex+1)}
                    >
                        {(data?.data.banner|| []).map(item=>{
                            return  <SwiperSlide>
                            <img  className="swiper-img" src={item.url} alt="swiper"/>
                        </SwiperSlide>
                        })}
                    </Swiper>

                    <div className="pagination">{page}/{data?.data.banner.length||""}</div>
                </div>
            </div>
            <div className="category">
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
              <div className="category-item">
                 <img className="category-item-img" src="http://statics.dell-lee.com/shopping/category-1.png"/>
                 <p className="category-item-title">新鲜蔬菜</p>
              </div>
            </div>
            <div className="card">
                <h3 className="card-title">
                    <img className="card-title-img" src="http://statics.dell-lee.com/shopping/hot.png" alt="新品尝鲜"/>
                    新品尝鲜
                    <div className="card-title-more">更多<span className="iconfont">&#xe614;</span></div>
                </h3>
                <div className="cart-content">
                    <div className="cart-content-item"> 
                        <img className="cart-content-item-img"  alt="" src="http://statics.dell-lee.com/shopping/hot.png"/>
                        <p className="cart-content-item-desc">金锣国产猪肉 去皮猪五花肉块...</p>
                        <p className="cart-content-item-price">
                            <span className="cart-content-item-yen">&yen;</span>
                            66.9
                            <span className="iconfont">&#xe659;</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}


export default Home;