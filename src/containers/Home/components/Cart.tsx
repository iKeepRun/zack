import { useNavigate } from "react-router-dom";
import { FreshesType } from "../type";

export type CartPropsType = {
    freshes: FreshesType | undefined
}

function Cart(props: CartPropsType) {
    const navigate=useNavigate()
    const { freshes } = props;
    return (
        <div className="cart">
            <h3 className="cart-title">
                <img className="cart-title-img" src="http://statics.dell-lee.com/shopping/hot.png" alt="新品尝鲜" />
                新品尝鲜
                <div className="cart-title-more">更多<span className="iconfont">&#xe614;</span></div>
            </h3>
            <div className="cart-content">
                {freshes?.map((item) => {
                    return <div className="cart-content-item" key={item.id} onClick={() => {navigate(`/detail/${item.id}`)}}>
                        <img className="cart-content-item-img" alt={item.name} src={item.imgUrl} />
                        <p className="cart-content-item-desc">{item.name}</p>
                        <div className="cart-content-item-price">
                            <span className="cart-content-item-yen">&yen;</span>
                            {item.price}
                            <div className="iconfont">&#xe7e0;</div>
                        </div>
                    </div>
                })}


            </div>

        </div>
    )
}

export default Cart;