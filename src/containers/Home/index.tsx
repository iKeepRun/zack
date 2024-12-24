import "./style.scss"
import 'swiper/css';
import type { ResponseType } from "./type";
import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
// import { message } from "../../utils/message";

import Banner from "./components/Banner";
import Category from "./components/Categort";
import Card from "./components/Card";




const defaultRequestData = {
    url: '/home.json',
    method: 'POST',
    data: {
        latitude: 37.7304167,
        longitude: -122.384425
    }
}

function Home() {
    const locallocation = localStorage.getItem("location");
    const historyLocation = locallocation ? JSON.parse(locallocation) : null;

    if (historyLocation) {
        historyLocation.latitude = defaultRequestData.data.latitude;
        historyLocation.longitude = defaultRequestData.data.longitude;
    }

    const [requestData, setRequestData] = useState(defaultRequestData)
    const { data } = useRequest<ResponseType>(requestData);
    //当定位发生改变的时候，访问后端接口重新获取所在位置 
    useEffect(() => {
        if (navigator.geolocation && !locallocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log("cccc", position)
                const { coords } = position;
                const { latitude, longitude } = coords;

                setRequestData({ ...defaultRequestData, data: { latitude, longitude } })

                localStorage.setItem("location", JSON.stringify(coords))
            }, () => { console.log() }, { timeout: 3000 })
        }
    }, [locallocation])
    
    return (
        <div className="page home-page">
            <Banner location={data?.data.location} banner={data?.data.banner} />
            <Category categories={data?.data.categories} />
            <Card freshes={data?.data.freshes} />
            <div className="bottom">-我是有底线的-</div>
            <div className="docker">
                <div className="docker-item docker-item-active">
                    <div className="iconfont ">&#xe7c6;</div>
                    <p className="docker-item-title">首页</p>
                </div>
                <div className="docker-item">
                    <div className="iconfont">&#xe63f;</div>
                    <p className="docker-item-title">分类</p>
                </div>
                <div className="docker-item">
                    <div className="iconfont">&#xe70b;</div>
                    <p className="docker-item-title">购物车</p>
                </div>
                <div className="docker-item">
                    <div className="iconfont">&#xe60d;</div>
                    <p className="docker-item-title">我的</p>
                </div>
            </div>
            {/* <Card  freshes={data?.data.freshes}/> */}
        </div>)
}


export default Home;