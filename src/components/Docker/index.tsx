import "./style.scss"

import { useNavigate } from "react-router-dom";

const tapMap = [
    {
        name: "home",
        url: "/home",
        icon: "&#xe7c6;",
        desc: "首页"
    }, {
        name: "category",
        url: "/category",
        icon: "&#xe63f;",
        desc: "分类"
    }, {
        name: "cart",
        url: "/cart",
        icon: "&#xe70b;",
        desc: "购物车"
    }, {
        name: "mine",
        url: "/mine",
        icon: "&#xe60d;",
        desc: "我的"
    }
]

function Docker(props:{ name: string }) {
    
    const navigate = useNavigate()
    const {name}=props


    return (
        <div className="docker">
            {
                tapMap.map(item =>
                    <div className={name===item.name?"docker-item docker-item-active":"docker-item"}
                        key={item.url}
                        onClick={() => { navigate(item.url) }}>
                        <div className="iconfont " dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                        <p className="docker-item-title" >{item.desc}</p>
                    </div>
                )
            }
        </div>
    )
}


export default Docker;