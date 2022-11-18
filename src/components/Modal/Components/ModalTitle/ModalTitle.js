import React from 'react';
import './ModalTitle.css';

const ModalTitle = (props) => {
    return (
        <div className='Modal__Title'>
            {props.children}
        </div>
    );
};

export default ModalTitle;