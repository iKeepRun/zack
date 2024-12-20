
import type { LoginResponseType } from "./types";
import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { message } from "../../utils/message";
function Login() {
   
  
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('')

    const { request } = useRequest<LoginResponseType>({
       manual:false
    });
    const navigate = useNavigate();

    function handleLoginClick() {
        if (!phoneNumber) {
            message("手机号不能为空");
            return;
        }
        if (!password) {
            message("密码不能为空");
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
                message(e.message)
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

        </>)
}

export default Login;