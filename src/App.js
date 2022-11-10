import {useState} from "react";
import './App.css';
import Block1 from "./components/Block1/Block1";
import Block2 from "./components/Block2/Block2";
import Block3 from "./components/Block3/Block3";
import Modal from "./components/Modal/Modal";
import Block4 from "./components/Block4/Block4";
import Block5 from "./components/Block5/Block5";
import Block6 from "./components/Block6/Block6";
import Block7 from "./components/Block7/Block7";
import Block8 from "./components/Block8/Block8";
import Block9 from "./components/Block9/Block9";
import Block10 from "./components/Block10/Block10";
import Block11 from "./components/Block11/Block11";
import Block12 from "./components/Block12/Block12";
import Block13 from "./components/Block13/Block13";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import Block14 from "./components/Block14/Block14";
import Block15 from "./components/Block15/Block15";
import DocsBlock from "./components/DocsBlock/DocsBlock";

function App() {

    const [modalVisibe, setVisible] = useState(false);
    const [child, setChild] = useState(null);

    const openModal = () => {
        setVisible(true)
    }

    const setChildFunc = (content) => {
        setChild(content)
    }

    return (
        <div className="App__Сontainer">
            <Block1
                openModal={openModal}
                setChild={setChildFunc}
            />
            <Block2/>
            <Block3/>
            <Block4/>
            <Block5/>
            <Block6/>
            <Block7/>
            <Block8/>
            <Block9/>
            <Block10/>
            <Block11/>
            <Block12/>
            <Block13/>
            <Block14/>
            <Block15/>
            <InfoBlock/>
            <DocsBlock/>
            <Modal
                visible={modalVisibe}
                hide={() => setVisible(false)}
                childrenBlock={child}
            />
        </div>
    );
}

export default App;
