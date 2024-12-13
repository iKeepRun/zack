import "./style.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
function Home() {
    const [page,setPage]=useState(1);
    return (
        <div className="page home-page">

            <div className="banner">
                <div className="location">
                    <span className="iconfont" >&#xe83d;</span>
                    优果购(昌平店)
                </div>
                <div className="search">
                    <span className="iconfont" >&#xe73d;</span>
                    请输入你需要搜索的内容
                </div>
                <div className="swiper-area">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper) => setPage(swiper.activeIndex+1)}
                    >
                        <SwiperSlide>
                            <img className="swiper-img" src="http://statics.dell-lee.com/shopping/banner.png" alt="swiper" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img  className="swiper-img" src="http://statics.dell-lee.com/shopping/banner.png" alt="swiper"/>
                        </SwiperSlide>
                    </Swiper>

                    <div className="pagination">{page}/2</div>
                </div>
            </div>

        </div>)
}


export default Home;