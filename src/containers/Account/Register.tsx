import {  useRef, useState } from "react";
import useRequest from "../../utils/useRequest";
import Modal,{ ModalRefType } from "../../components/Modal";

function Register() {
    //返回值类型
  type ResponseType = {
        success: boolean
        data:string
    }
    
    const modalRef=useRef<ModalRefType>(null!);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
   
    const { request } = useRequest<ResponseType>()
    
    function handleLoginClick() {
        if(!userName){
            modalRef.current.showMessage("用户名不能为空");
            return ;
        } 
        if(!phoneNumber){
            modalRef.current.showMessage("手机号不能为空");
            return;
         }
        if(!password){
            modalRef.current.showMessage("密码不能为空");
            return ;
        } 
        if(!checkPassword){
            modalRef.current.showMessage("确认密码不能为空");
            return ;
        } 
        request({
                url:"/register.json",
                method:"POST",
                data:{
                    userName:userName,
                    phoneNumber:phoneNumber,
                    password:password,
                },    
        }).then(
            (data) => { data && console.log(data) }
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
                    <div className="form-item-title">用户名</div>
                    <input className="form-item-content" placeholder="请输入用户名"
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                </div>
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
                        onChange={(e) => {setPassword(e.target.value) }}
                    />
                </div>
                <div className="form-item">
                    <div className="form-item-title">确认密码</div>
                    <input className="form-item-content" placeholder="请输入确认密码"
                        value={checkPassword}
                        onChange={(e) => { setCheckPassword(e.target.value) }}
                    />
                </div>
            </div>
            <div className="submit" onClick={handleLoginClick}>注册</div>
          
            <Modal ref={modalRef}/>
        </>)
}

export default Register;