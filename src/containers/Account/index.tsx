import { Link, Outlet, useLocation } from "react-router-dom";
import "./style.scss"
function Account() {
    const location=useLocation()
    
    const loginclassName=location.pathname==="/account/login"?"tab-item-activity":null;
    const registerclassName=location.pathname==="/account/register"?"tab-item-activity":null;

    return (
    <div className="page account-page">
        <div className="tab">
            <div className={`tab-item tab-item-left ${loginclassName}`} ><Link to={'/account/login'}>登录</Link></div>
            <div className={`tab-item tab-item-right ${registerclassName}`}><Link to={'/account/register'}>注册</Link></div>
        </div>
        <Outlet />
    </div>)

}


export default Account;