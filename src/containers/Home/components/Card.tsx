import { FreshesType } from "../type";

export type CardPropsType = {
    freshes: FreshesType | undefined
}

function Card(props: CardPropsType) {
    const { freshes } = props;
    return (
        <div className="card">
            <h3 className="card-title">
                <img className="card-title-img" src="http://statics.dell-lee.com/shopping/hot.png" alt="新品尝鲜" />
                新品尝鲜
                <div className="card-title-more">更多<span className="iconfont">&#xe614;</span></div>
            </h3>
            <div className="card-content">
                {freshes?.map((item) => {
                    return <div className="card-content-item" key={item.id}>
                        <img className="card-content-item-img" alt={item.name} src={item.imgUrl} />
                        <p className="card-content-item-desc">{item.name}</p>
                        <div className="card-content-item-price">
                            <span className="card-content-item-yen">&yen;</span>
                            {item.price}
                            <div className="iconfont">&#xe7e0;</div>
                        </div>
                    </div>
                })}


            </div>
           
        </div>
    )
}

export default Card;