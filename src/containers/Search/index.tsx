import { ResponseType } from "./type";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./style.scss"
import useRequest from "../../hooks/useRequest";

const defaultRequestData = {
    url: "/get_hot_list.json",
    method: "POST"
}

function Search() {
    const params = useParams();

    var localhistory = localStorage.getItem("historyList");
    var localhistoryList: string[] = localhistory ? JSON.parse(localhistory) : [];

    const { data } = useRequest<ResponseType>(defaultRequestData);
    const hotList = data?.data || [];

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    const [historyList, setHistoryList] = useState(localhistoryList);

    function handleSearchInput(k: string) {
        if (k === "Enter" && keyword) {
            if (!historyList.find(item => item === keyword)) {
                const newHistoryList = [keyword, ...historyList]
                setHistoryList(newHistoryList)
                localStorage.setItem("historyList", JSON.stringify(newHistoryList))
                navigate(`/searchlist/${params.shopId}/${keyword}`)
            }
        }
    }

    function handleClearHistory() {
        setHistoryList([])
        localStorage.removeItem("historyList")
    }

    function handleItemSearchClick(item: string) {
        navigate(`/searchlist/${params.shopId}/${item}`)
    }

    return (
        <div className="page search-page">
            <div className="title">
                <Link to="/home" className="title-back">
                    <div className="iconfont title-icon" >&#xe600;</div>
                </Link>
                <input className="iconfont title-input"
                    placeholder="&#xe60e;请输入商品名字"
                    value={keyword}
                    onChange={(e) => { setKeyword(e.target.value) }}
                    onKeyDown={(k) => { handleSearchInput(k.key) }}
                />
            </div>
            <div className="sub">
                {localhistory ?
                    <div className="sub-title">
                        历史搜索
                        <span className="iconfont sub-title-icon" onClick={handleClearHistory}>&#xe610;</span>
                    </div>
                    : <></>
                }

                <ul className="sub-list">
                    {historyList.map((item, index) => {
                        return (
                            <li className="sub-list-item" key={index} onClick={() => { handleItemSearchClick(item) }}>{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="sub">
                <div className="sub-title">
                    热门搜索
                </div>
                <ul className="sub-list">
                    {hotList.map((item) => {
                        return (
                            <li className="sub-list-item" key={item.id} onClick={() => { handleItemSearchClick(item.name) }}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Search;