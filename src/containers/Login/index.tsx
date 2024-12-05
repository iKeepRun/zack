import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRequest from "../../utils/useRequest";

function Login(){

    //返回值类型
    type ResponseType={
        name:string;
    }

    const [phoneNumber,setPhoneNumber]=useState('');
    const [password,setPassword]=useState('')
    const navigate=useNavigate();
    
    const {data,error,request}=useRequest<ResponseType>("a.json","GET",{})

    function handleRegisterClick(){
        navigate("/Register")
    }
    function handleLoginClick(){
       request().then((data)=>{
        data && console.log(data.name)
       }).catch((e:any)=>{alert(e.message)});
    }

    useEffect(()=>{
        if(data){  console.log(data.name)}
        if(error){  alert(error)}
    },[data,error])
    
    
  return <div className="page login-page">
            <div className="tab">
                <div className="tab-item tab-item-left" >登录</div>
                <div className="tab-item tab-item-right" onClick={handleRegisterClick}>注册</div>
            </div>
            <div className="form">
                <div className="form-item">
                    <div className="form-item-title">手机号</div>
                    <input className="form-item-content" placeholder="请输入手机号码"
                        value={phoneNumber} 
                        onChange={(e)=>{setPhoneNumber(e.target.value)}}   
                    />
                </div>
                <div className="form-item">
                    <div className="form-item-title">密码</div>
                    <input className="form-item-content" placeholder="请输入密码"
                     value={password} 
                     onChange={(e)=>{setPassword(e.target.value)}}   
                    />
                </div>
            </div>
            <div className="submit" onClick={handleLoginClick}>登录</div>
            <div className="notice">*登录即表示您赞同使用条款及隐私政策</div>
        </div>
}

export default Login;