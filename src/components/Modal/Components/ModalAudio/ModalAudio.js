import React from 'react';
import './ModalAudio.css';
import ReactAudioPlayer from "react-audio-player";

const ModalAudio = (props) => {
    return (
        <div className='Modal__Audio'>
            <ReactAudioPlayer
                autoPlay={false}
                controls={true}
                src={props.path}
                style={{width: '90%'}}
            />
        </div>
    );
};

export default ModalAudio;