import "./style.scss"
function Modal(props:{children:string}){
    const {children}=props;
    return <div className="modal">
           <div className="modal-text">{children}</div>
        </div>
}

export default Modal;