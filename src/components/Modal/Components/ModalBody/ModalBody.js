import React from 'react';
import './ModalBody.css';

const ModalBody = (props) => {
    return (
        <div className='Modal__Body'>
            {props.children}
        </div>
    );
};

export default ModalBody;