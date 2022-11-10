import React from 'react';
import './Block1.css';
import ReactAudioPlayer from "react-audio-player";

const Block1 = ({setChild, openModal}) => {

    const openModalBlock1 = () => {
        setChild(
            <>

                <h1 style={{textAlign: 'center'}}>Тут инофрмация - о чем-то</h1>
                <ReactAudioPlayer
                    autoPlay={false}
                    controls={true}
                    src='/audio/test.mp3'
                    style={{margin: '10px', textAlign:'center'}}
                />
                <div>МЫ любим СИПО!!!!!
                </div>
                <div>МЫ любим СИПО!!!!!
                </div>
                <div>МЫ любим СИПО!!!!!
                </div>
                <div>МЫ любим СИПО!!!!!
                </div>
                <div>МЫ любим СИПО!!!!!
                </div>
                <div>МЫ любим СИПО!!!!!
                </div>
              
            </>
        );
        openModal()
    }

    return (
        <div className='Block1__Container'>
            <div className="Block1_Part1_Container">
                <div className="Block1_Part1_Part1" onClick={openModalBlock1}>
                    <div className="Block1_Part1_Part1_Header">
                        <div className="Block1_Part1_Part1_Header-Left-Text">
                            Спб(Прдств в Мск)
                        </div>
                        <div className="Block1_Part1_Part1_Header-Right-Text">
                            11(8)
                        </div>
                        <div className="Block1_Part1_Part1_Header-BlackBox">
                            B
                        </div>
                    </div>
                    <div className="Block1_Part1_Part1_Main">
                        КĊ РФ
                    </div>
                    <div className="Block1_Part1_Part1_Footer">
                        <div className="Block1_Part1_Part1_Footer-Left">
                            <div className="Block1_Part1_Part1_Footer-Left-UP">
                                70(76, СО)
                            </div>
                            <div className="Block1_Part1_Part1_Footer-Left-BOT">
                                40-15
                            </div>
                        </div>
                        <div className="Block1_Part1_Part1_Footer_Right">
                            ∞
                        </div>
                    </div>
                </div>
                <div className="Block1_Part1_Part2">
                    <div className="Block1_Part1_Part2_UP">
                        @пп Ꝁ
                    </div>
                    <div className="Block1_Part1_Part2_BTM">
                        Скртрт
                    </div>
                </div>
            </div>
            <div className="Block1_Part2_Container">
                <div className="Block1_Part2_Header-BlackBox">
                    B
                </div>
                <div className="Block1_Part2-Infinity">
                    Ꚙ (зм76)
                </div>
                <div className="Block1_Part2_Main-Text">
                    Пь Ꝁ
                </div>
                <div className="Block1_Part2_Green-Box">
                    6*Ꚙ
                </div>
            </div>
        </div>
    );
};

export default Block1;
