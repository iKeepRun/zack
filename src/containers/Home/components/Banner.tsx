
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LocationType, BannersType } from "../type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type BannerPropsType = {
    location: LocationType | undefined;
    banner: BannersType | undefined;
}




function Banner(props: BannerPropsType) {

    const { location, banner } = props;
    const [page, setPage] = useState(1);
    const navigate=useNavigate();
    return (
        <div className="banner">
            <div className="location" onClick={()=>{navigate("/nearby")}}>
                <span className="iconfont" >&#xe83d;</span>
                {location?.address || ''}
            </div>
            <div className="search" onClick={()=>{navigate("/search")}}>
                <span className="iconfont" >&#xe73d;</span>
                请输入你需要搜索的内容
            </div>
            <div className="swiper-area">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(swiper: SwiperType) => setPage(swiper.activeIndex + 1)}
                >
                    {(banner || []).map(item => {
                        return <SwiperSlide>
                            <img className="swiper-img" src={item.url} alt="swiper" />
                        </SwiperSlide>
                    })}
                </Swiper>

                <div className="pagination">{page}/{banner?.length || ""}</div>
            </div>
        </div>

    )
}


export default Banner;