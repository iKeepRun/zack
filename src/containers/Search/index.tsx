import { Link } from "react-router-dom";
import "./style.scss"

function Search() {
    return (
        <div className="page search-page">
            <div className="title">
                <Link to="/home" className="title-back">
                    <div className="iconfont title-icon" >&#xe600;</div>
                </Link>
                <input className="iconfont title-input" placeholder="&#xe60e;请输入商品名字"/>
            </div>
            <div className="sub">
                <div className="sub-title">
                    历史搜索
                    <span className="iconfont sub-title-icon">&#xe610;</span>
                </div>
                <ul className="sub-list">
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">澳洲</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                </ul>
            </div>
            <div className="sub">
                <div className="sub-title">
                    热门搜索
                    {/* <span className="iconfont sub-title-icon">&#xe615;</span> */}
                </div>
                <ul className="sub-list">
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">鳕鱼</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">骨肉相连</li>
                    <li className="sub-list-item">大龙虾</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                    <li className="sub-list-item">深海带鱼</li>
                    <li className="sub-list-item">澳洲肥牛</li>
                </ul>
            </div>
        </div>

    )
}

export default Search;