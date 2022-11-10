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
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam deserunt eaque enim, esse
                    hic iusto neque numquam repellat repellendus reprehenderit ullam veritatis voluptatibus. Adipisci
                    amet exercitationem placeat provident vel?
                </div>
                <div>Deserunt pariatur perspiciatis quibusdam repellendus repudiandae sit tenetur voluptas. Ad assumenda
                    cum et labore nemo praesentium, quaerat. Assumenda dicta dolore ducimus est numquam obcaecati odio
                    sunt, tempora vel vitae voluptas.
                </div>
                <div>Amet debitis delectus ea eum exercitationem harum hic id illum, modi odit qui, quos similique unde?
                    Architecto asperiores beatae blanditiis cum magnam necessitatibus quasi quisquam sed sint tenetur!
                    Accusantium, necessitatibus!
                </div>
                <div>Alias assumenda, atque commodi debitis delectus dolor doloremque enim est harum hic impedit in iste
                    itaque iusto minima natus obcaecati odit, quia quod, repellendus rerum sapiente sint suscipit velit
                    vero.
                </div>
                <div>Aspernatur dolorem enim molestiae. Architecto, aspernatur aut dignissimos dolore eligendi error et
                    eum explicabo fuga illum, incidunt ipsum iste itaque labore non odit praesentium quae quia quidem
                    rem sapiente soluta?
                </div>
                <div>Ad cupiditate eligendi esse fugit laborum minima perferendis rem veritatis! Amet commodi deserunt
                    dicta facilis harum incidunt laboriosam minus mollitia nostrum obcaecati provident quaerat repellat
                    rerum sequi sit ullam, voluptate?
                </div>
                <div>Aliquam assumenda aut autem cum dolor dolore doloribus, ducimus enim error fuga fugiat harum ipsam
                    ipsum itaque iure maiores minus necessitatibus obcaecati odio perferendis quae repellendus,
                    similique sint sunt veniam?
                </div>
                <div>At blanditiis consectetur corporis distinctio eaque error et, fugiat, ipsa officia optio quasi quis
                    ratione, sint sit suscipit velit voluptas. Consectetur exercitationem illo magnam, necessitatibus
                    nihil obcaecati quisquam sapiente unde.
                </div>
                <div>Aliquid animi at blanditiis cumque dicta dolorem, doloremque ducimus fugiat ipsa repellendus? Ab
                    animi beatae blanditiis corporis explicabo, ipsam itaque, minima neque nesciunt, non nostrum nulla
                    perferendis quos ratione vel.
                </div>
                <div>Aliquam beatae deleniti dignissimos dolores eum exercitationem hic numquam perferendis quae
                    reprehenderit, sint totam. Assumenda consequatur iure odio quidem sapiente sed velit. Aperiam
                    consequuntur deleniti, eos ipsum laudantium reprehenderit voluptatibus.
                </div>
                <div>Est, ipsum, voluptatibus. A alias aliquid animi at, beatae blanditiis dolor, ea eaque error esse
                    facere fugiat inventore nihil possimus quas quibusdam quod saepe sapiente, sequi sit ut vero
                    voluptatibus?
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