import React from "react";

const Modal = ({isOpen}) =>{ 
    return(
        <div className={`modal ${isOpen && "modal-open"}`}>
         <h1> Modal</h1>
        </div>
    )
}

export {Modal}; 
