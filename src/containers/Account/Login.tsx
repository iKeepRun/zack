import { useRef, useState } from "react";
import useRequest from "../../utils/useRequest";
import Modal, { ModalRefType } from "../../components/Modal";
import { useNavigate } from "react-router-dom";

function Login() {
    //返回值类型
    type ResponseType = {
        success: boolean;
        data: {
            "token": string
        }
    }
    const modalRef = useRef<ModalRefType>(null!);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('')

    const { request } = useRequest<ResponseType>();
    const navigate = useNavigate();

    function handleLoginClick() {
        if (!phoneNumber) {
            modalRef.current.showMessage("手机号不能为空");
            return;
        }
        if (!password) {
            modalRef.current.showMessage("密码不能为空");
            return;
        }
        request({
            url: "/login.json",
            method: "POST",
            data: {
                phoneNumber: phoneNumber,
                password: password,
            },
        }).then(
            (data) => {
                const { data: { token } } = data;
                console.log("token ",token)
                localStorage.setItem("token",token)
                if(token){
                    navigate("/home")
                }else{
                    navigate("/account/login")
                }
            }
        ).catch(
            (e: any) => {
                modalRef.current.showMessage(e.message)
            }
        )
    }




    return (
        <>

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

            <Modal ref={modalRef} />
        </>)
}

export default Login;