import React from 'react';
import PopPop from "react-poppop";
import './Modal.css';

const Modal = ({visible, hide, childrenBlock}) => {

    return (
        <PopPop position="topLeft"
                open={visible}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => hide()}
                closeOnOverlay={true}>
            <div className="Modal__InnerContent-Container">
                {childrenBlock}
            </div>
        </PopPop>
    );
};

export default Modal;
