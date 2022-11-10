import React from 'react';
import './Block5.css';

const Block5 = (props) => {
    return (
        <div className='Block5__Container'>
            <div className="Block5__ArrowUp"></div>
            <div className="Block5__ArrowLeft1"></div>
            <div className="Block5__ArrowLeft2"></div>
            <div className="Block5__Part1-Container">
                <div className="Block5__Part1-LeftSide">
                    <div className="Block5__Part1-LeftSide-UP">
                        ċ Обл, Sуб
                        Пь Рай<p></p>
                        ċ Рай
                    </div>
                    <div className="Block5__Part1-LeftSide-Down">
                        Мир
                    </div>
                </div>
                <div className="Block5__Part1-RightSide">
                    <div className="Block5__Part1-RightSide-Top">
                        Пь   21(11)
                    </div>
                    <div className="Block5__Part1-RightSide-Center">
                        КǨ ċS
                    </div>
                    <div className="Block5__Part1-RightSide-Bottom">
                        Кнф ċ S (Свт)  4
                    </div>
                </div>
            </div>
            <div className="Block5__Part2-Container">
                <div className="Block5__Part2-Top">
                    Пь
                </div>
                <div className="Block5__Part2-Center">
                    ЭК ċS
                </div>
                <div className="Block5__Part2-Bottom">
                    Кнф ċ S (Свт)   4
                </div>
            </div>
        </div>
    );
};

export default Block5;