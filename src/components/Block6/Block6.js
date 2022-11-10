import React from 'react';
import './Block6.css';
import String1 from "./String1/String1";
import String2 from "./String2/String2";
import String3 from "./String3/String3";
import String4 from "./String4/String4";

const Block6 = (props) => {
    return (
        <>
            <div className='Block6__Container'>
                <String1/>
                <String2/>
                <String3/>
                <String4/>
            </div>
            <div className="Block6__Arrow1">

            </div>
            <div className="Block6__Arrow2">

            </div>
            <div className="Block6__Arrow3">

            </div>
        </>
    );
};

export default Block6;