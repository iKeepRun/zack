import { ReactNode } from "react";
import "./style.scss"

function Popup(props: { show: boolean, clickCallback: () => void, children: ReactNode }) {

  const { show, children, clickCallback } = props
  return show ? (<>
    <div className="popup-mask" onClick={clickCallback}>
    </div>

    <div className="popup-cart">
      {children}
    </div>

  </>) : null
}


export default Popup;