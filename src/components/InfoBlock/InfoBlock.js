import React from 'react';
import './InfoBlock.css';

const InfoBlock = (props) => {
    return (
        <div className='InfoBlock__Container'>
            <div className="InfoBlock__Header">
                <div className="InfoBlock__Header-Part1">Кол-во или местонахожд.</div>
                <div className="InfoBlock__Header-Part2">Инстанции</div>
                <div className="InfoBlock__Header-Part3">Состав</div>
            </div>
            <div className="InfoBlock__Center">
                <div className="InfoBlock__Center-UpBlock">
                    Квалиф. Класс
                </div>
                <div className="InfoBlock__Center-BottomBlock">
                    Макс. Возраст
                </div>
                <p>Н</p>азвание
                <div className="InfoBlock__Center-Text1">
                    Цвет названия: юрисдикция
                </div>
                <div className="InfoBlock__Center-Text2">
                    Цвет фона: уровень ОСС и состава
                </div>
            </div>
            <div className="InfoBlock__Bottom">
                <div className="InfoBlock__Bottom-Part1">Мин. треб. возраста и стажа</div>
                <div className="InfoBlock__Bottom-Part2">[Назначается]</div>
                <div className="InfoBlock__Bottom-Part3">Порядок и срок назначения</div>
            </div>
        </div>
    );
};

export default InfoBlock;