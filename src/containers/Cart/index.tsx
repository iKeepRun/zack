import Docker from "../../components/Docker";
import "./style.scss"
function Cart() {
    return (
        <div className="page cart-page">
            <div className="cart-title">购物车</div>
            <div className="cart-detail">
                <div className="cart-detail-title">
                    <input type="radio" className="cart-detail-title-radio"/>
                    <div className="iconfont cart-detail-title-img">&#xe6d8;</div>
                    <p className="cart-detail-title-name">喜梅蔬菜店</p>
                </div>
                <div className="cart-detail-content">
                    <div className="cart-detail-item">
                        <input type="radio" className="cart-detail-item-radio" />
                        <img className="cart-detail-item-img" src="http://statics.dell-lee.com/shopping/category-list-4.png" alt="" />
                        <div className="cart-detail-item-right">
                            <div className="item-title">xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx</div>
                            <div className="item-specification"> 0.45kg</div>
                            <div className="item-price"><span className="yen">&yen;</span>14.9</div>
                            <input className="item-input"/>
                        </div>
                    </div>
                    
                    <div className="cart-detail-item">
                        <input type="radio" className="cart-detail-item-radio" />
                        <img className="cart-detail-item-img" src="http://statics.dell-lee.com/shopping/category-list-4.png" alt="" />
                        <div className="cart-detail-item-right">
                            <div className="item-title">xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx</div>
                            <div className="item-specification"> 0.45kg</div>
                            <div className="item-price"><span className="yen">&yen;</span>14.9</div>
                            <input className="item-input"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-detail">
                <div className="cart-detail-title">
                    <input type="radio" className="cart-detail-title-radio"/>
                    <div className="iconfont cart-detail-title-img">&#xe6d8;</div>
                    <p className="cart-detail-title-name">喜梅蔬菜店</p>
                </div>
                <div className="cart-detail-content">
                    <div className="cart-detail-item">
                        <input type="radio" className="cart-detail-item-radio" />
                        <img className="cart-detail-item-img" src="http://statics.dell-lee.com/shopping/category-list-4.png" alt="" />
                        <div className="cart-detail-item-right">
                            <div className="item-title">xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx</div>
                            <div className="item-specification"> 0.45kg</div>
                            <div className="item-price"><span className="yen">&yen;</span>14.9</div>
                            <input className="item-input"/>
                        </div>
                    </div>
                    
                    <div className="cart-detail-item">
                        <input type="radio" className="cart-detail-item-radio" />
                        <img className="cart-detail-item-img" src="http://statics.dell-lee.com/shopping/category-list-4.png" alt="" />
                        <div className="cart-detail-item-right">
                            <div className="item-title">xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx</div>
                            <div className="item-specification"> 0.45kg</div>
                            <div className="item-price"><span className="yen">&yen;</span>14.9</div>
                            <input className="item-input"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="cart-detail">
                <div className="cart-detail-title">
                    <input type="radio" className="cart-detail-title-radio"/>
                    <div className="iconfont cart-detail-title-img">&#xe6d8;</div>
                    <p className="cart-detail-title-name">喜梅蔬菜店</p>
                </div>
                <div className="cart-detail-content">
                    <div className="cart-detail-item">
                        <input type="radio" className="cart-detail-item-radio" />
                        <img className="cart-detail-item-img" src="http://statics.dell-lee.com/shopping/category-list-4.png" alt="" />
                        <div className="cart-detail-item-right">
                            <div className="item-title">xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx</div>
                            <div className="item-specification"> 0.45kg</div>
                            <div className="item-price"><span className="yen">&yen;</span>14.9</div>
                            <input className="item-input"/>
                        </div>
                    </div>
                    
                    <div className="cart-detail-item">
                        <input type="radio" className="cart-detail-item-radio" />
                        <img className="cart-detail-item-img" src="http://statics.dell-lee.com/shopping/category-list-4.png" alt="" />
                        <div className="cart-detail-item-right">
                            <div className="item-title">xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx</div>
                            <div className="item-specification"> 0.45kg</div>
                            <div className="item-price"><span className="yen">&yen;</span>14.9</div>
                            <input className="item-input"/>
                        </div>
                    </div>
                </div>

            </div>
            <Docker name="cart" />
        </div>)
}


export default Cart;