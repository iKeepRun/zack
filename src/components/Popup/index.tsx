import { ReactNode } from "react";
import "./style.scss"
function Popup(props:{children:ReactNode}){

    const {children} =props
  return (<div className="popup">
          {children}
  </div>)
}


export default Popup;