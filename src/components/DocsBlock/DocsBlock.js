import React from 'react';
import './DocsBlock.css';

const DocsBlock = (props) => {
    return (
        <>
            <div className="DocsBlock__Part1-Container">
                <div className="DocsBlock__Part1-Part1">
                    ċ - судья
                </div>
                <div className="DocsBlock__Part1-Part2">
                    Ċ - суд
                </div>
                <div className="DocsBlock__Part1-Part3">
                    S - субъект РФ
                </div>
                <div className="DocsBlock__Part1-Part4">
                    Ǩ - коллегия
                </div>
                <div className="DocsBlock__Part1-Part5">
                    <p>↑</p> - ВС РФ
                </div>
                <div className="DocsBlock__Part1-Part6">
                    <p>Пь</p>&nbsp;- предс-ль
                </div>
            </div>
            <div className="DocsBlock__Part2-Container">
                <div className="DocsBlock__Part2-Part1">
                    <p>₿</p>&nbsp;- военный
                </div>
                <div className="DocsBlock__Part2-Part2">
                    <p>₳</p>&nbsp;- арбитраж.
                </div>
                <div className="DocsBlock__Part2-Part3">
                    <p>Ø</p>&nbsp;- общ. юрисд.
                </div>
            </div>
        </>
    );
};

export default DocsBlock;