import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import Form1 from '../components/form1'
import Form2 from '../components/form2'
import { Button } from 'react-scroll';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

function Forms() {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#0E3232';
      }
    function closeModal(){
    setIsOpen(false);
    }

    const [myIndex, setMyIndex] = useState(1);
    const [myIndex2, setMyIndex2] = useState(2);
    const [opacity, setopacity] = useState(1);
    const [opacity, setopacity] = useState(1);
    const [display, setDisplay] = useState('block');
    const [display2, setDisplay2] = useState('none');
    const [transition, setTransition] = useState('0%');
    const [transition2, setTransition2] = useState('-100%');


   const clickHandler = (e) => {
        console.log(e.target.tabIndex, "hgahahah")
        if(e.target.tabIndex === 1){
          setMyIndex(1)
          setMyIndex2(2)
          setDisplay("block")
          setDisplay2("none")
          setScale(1)
          setScale2(0);
          setTransition('0%');
          setTransition2('100%');
          
        }else if(e.target.tabIndex === 2){
          setMyIndex(2)
          setMyIndex2(1)
          setDisplay("none")
          setDisplay2("block")
          setScale(0)
          setScale2(1);
          setTransition('-100%');
          setTransition2('0%');
        }

    }

    return (
        <Conainer  className="container">

          <div className="Header">
              <h3>МИНИЙ ТУХАЙ</h3>
          </div>
          <div tabIndex={1} onClick={clickHandler}>
              "1"
          </div>
          <div tabIndex={2} onClick={clickHandler} >
               "2"
          </div>

          <div className="formsPAr">
            <div className={`side${myIndex} style${myIndex}`} style={{ left:`${transition}` }}>
            <Form1 />
            </div>
            <div className={`side${myIndex2} style${myIndex}`} style={{ left:`${transition2}`}}>
            <Form2 />
            </div>
          </div>
         


          <button onClick={clickHandler}>Click me next</button>



        {/* <div>
            <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <div>I am a modal</div>
                    <div>I am a modal</div>
                    <div>I am a modal</div>
                    <div>I am a modal</div>
                    <div>I am a modal</div>
                    <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                    </form>
                </Modal>
        </div> */}
        </Conainer>
    )
}

export default Forms


const Conainer = styled.div`
    color: white;
    height:100vh;
    // margin-top:5vh;
    border-radius:8px;
    z-index:0;
    font-family: "Poppins', sans-serif";
    .formsPAr{
      position:relative;
      height:80px;
      width:100%;
      overflow:hidden;
      .side1{
        top:0;
        width:100%;
        position:absolute;
        background:black;
        transition:all 0.5s ease;
      }
      .side2{
        top:0;
        width:100%;
        position:absolute;
        background:black;
        transition:all 0.5s ease;
      }
    }
    
    
`