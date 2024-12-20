import React from 'react';
import ReactDOM from 'react-dom/client';

const modal = {
    position: "absolute" as const,
    width: "3rem",
    height: "1rem",
    background: "rgb(0, 0, 0,.6)",
    left: "50%",
    top: "50%",
    marginLeft: "-1.5rem",
    marginTop: "-0.5rem",
    borderRadius: ".08rem",
    display: "table"
}

const modalText = {
    fontSize: ".16rem",
    padding: ".2rem",
    textAlign: "center" as const,
    display: "table-cell",
    verticalAlign: "middle",
    color: "#FFF"
}

const element = document.createElement('div')
const root = ReactDOM.createRoot(element);

export const message = (message: string, timeout=1500) => {
    root.render(
        <div style={modal}>
            <div style={modalText}>{message}</div>
        </div>
    );
    if (!element.parentNode) {
        document.body.appendChild(element); 
        setTimeout(() => {
            document.body.removeChild(element);
        }, timeout)
    }
}