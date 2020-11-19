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
    const [scale, setScale] = useState(1);
    const [scale2, setScale2] = useState(0);
    const [display, setDisplay] = useState('block');
    const [display, setDisplay2] = useState('none');


   const clickHandler = (e) => {
        console.log(e.target.tabIndex, "hgahahah")
        if(e.target.tabIndex === 1){
          setMyIndex(1)
          setMyIndex2(2)
          setDisplay("block")
          setDisplay2("none")
          setScale(1)
          setScale2(0);
       
        }else if(e.target.tabIndex === 2){
          setMyIndex(2)
          setMyIndex2(1)
          setDisplay("none")
          setDisplay2("block")
          setScale(0)
          setScale2(1);
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
          <div className={`side${myIndex} style${myIndex}`} style={{transform:`scale(${scale})`}}>
           <Form1 />
          </div>
          <div className={`side${myIndex2} style${myIndex}`} style={{transform:`scale(${scale2})`}}>
           <Form2 />
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
    .side1{
      background:black;
      transition:all 0.4s ease;
    }
    .side2{
      background:white;
      transition:all 0.4s ease;
    }
    
`