import "./style.scss"
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

import { createPortal } from "react-dom";

export type ModalRefType = {
    showMessage: (message: string) => void;
}

const Modal = forwardRef<ModalRefType>((props, ref) => {
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    
    const divRef=useRef(document.createElement('div'))
    const divElement=divRef.current;

    // 将showMessage方法返回给父组件
    useImperativeHandle(ref, () => {
        return {
             showMessage(message: string) {
                setShowModal(true);
                setMessage(message);
                setTimeout(() => {
                    setShowModal(false);
                }, 1500)
            }
        }
    }, [])
    
    useEffect(()=>{
        if(showModal){
            document.body.appendChild(divElement);
        }else{
            if(divElement.parentNode){
                document.body.removeChild(divElement);
            }
        }

        return ()=>{
            if(divElement.parentNode){
                document.body.removeChild(divElement);
            }
        }
    },[showModal,divElement])
   

    return createPortal(        
    <div className="modal">
        <div className="modal-text">{message}</div>
    </div>
    ,divElement)
})

export default Modal;
