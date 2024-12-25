import { ResponseType } from "./type";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.scss"
import useRequest from "../../hooks/useRequest";

const defaultRequestData = {
    url: "/get_hot_list.json",
    method: "POST"
}

function Search() {
    var localhistory = localStorage.getItem("historyList");
    var localhistoryList: string[] = localhistory ? JSON.parse(localhistory) : [];

    const { data } = useRequest<ResponseType>(defaultRequestData);
    const hotList = data?.data || [];

    const [keyword, setKeyword] = useState("");
    const [historyList, setHistoryList] = useState(localhistoryList);

    function handleSearchInput(k: any) {
        if (k.key === "Enter") {
            const newHistoryList = [keyword, ...historyList]
            setHistoryList(newHistoryList)
            localStorage.setItem("historyList", JSON.stringify(newHistoryList))
        }
    }

    function handleClearHistory() {
        setHistoryList([])
        localStorage.removeItem("historyList")
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
                    onKeyDown={(k) => { handleSearchInput(k) }}
                />
            </div>
            <div className="sub">
                <div className="sub-title">
                    历史搜索
                    <span className="iconfont sub-title-icon" onClick={handleClearHistory}>&#xe610;</span>
                </div>
                <ul className="sub-list">
                    {historyList.map((item, index) => {
                        return (
                            <li className="sub-list-item" key={index}>{item}</li>
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
                            <li className="sub-list-item" key={item.id}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Search;