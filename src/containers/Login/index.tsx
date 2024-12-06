import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRequest from "../../utils/useRequest";
import Modal from "../../components/Modal";

function Login() {

    //返回值类型
    type ResponseType = {
        name: string;
    }
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const { request } = useRequest<ResponseType>("a.json", "GET", {})

    function handleRegisterClick() {
        navigate("/Register")
    }
    function handleLoginClick() {
        request().then(
            (data) => { data && console.log(data.name) }
        ).catch(
            (e: any) => {
                setMessage(e?.message || '未知错误');
                setShowModal(true);
                // alert(e.message)
            }
        )
    }

    useEffect(() => {
        if (showModal) {
            const timer = setInterval(() => {
                setShowModal(false);
            }, 2000)
            return () => { clearInterval(timer) }
        }
    }, [showModal])


    return (
        <div className="page login-page">
            <div className="tab">
                <div className="tab-item tab-item-left" >登录</div>
                <div className="tab-item tab-item-right" onClick={handleRegisterClick}>注册</div>
            </div>
            <div className="form">
                <div className="form-item">
                    <div className="form-item-title">手机号</div>
                    <input className="form-item-content" placeholder="请输入手机号码"
                        value={phoneNumber}
                        onChange={(e) => { setPhoneNumber(e.target.value) }}
                    />
                </div>
                <div className="form-item">
                    <div className="form-item-title">密码</div>
                    <input className="form-item-content" placeholder="请输入密码"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
            </div>
            <div className="submit" onClick={handleLoginClick}>登录</div>
            <div className="notice">*登录即表示您赞同使用条款及隐私政策</div>
            {showModal ? <Modal>{message}</Modal> : null}
        </div>)
}

export default Login;