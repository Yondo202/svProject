import React, { useState } from 'react'
import styled from 'styled-components'
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
    const [opacity, setopacity] = useState("1");
    const [opacity2, setopacity2] = useState("0");
    const [display, setDisplay] = useState('block');
    const [display2, setDisplay2] = useState('none');
    const [transition, setTransition] = useState('0%');
    const [transition2, setTransition2] = useState('-100%');
    const [PrevBtn, setPrevBtn] = useState(0)
    const [NextBtn, setNextBtn] = useState(1)
    const [Submit, setSubmit] = useState("none")

   const clickHandler = (e) => {
        console.log(e.target.tabIndex, "hgahahah")
        if(e.target.tabIndex === 1){
          setMyIndex(1)
          setMyIndex2(2)
          setDisplay("block")
          setDisplay2("none")
          setTransition('0%');
          setTransition2('100%');
          setopacity("1");
          setopacity2("0");
          setPrevBtn(0);
          setNextBtn(1)
          setSubmit("none");
        }else if(e.target.tabIndex === 2){
          setMyIndex(2)
          setMyIndex2(1)
          setDisplay("none")
          setDisplay2("block")
          setTransition('-100%');
          setTransition2('0%');
          setopacity("0");
          setopacity2("1");
          setPrevBtn(1);
          setNextBtn(0)
          setSubmit("block");
        }
    }

    return (
        <Conainer  className="container">

          <div className="Header">
              <h3>МИНИЙ ТУХАЙ</h3>
          </div>
          {/* <div tabIndex={1} onClick={clickHandler}>
              "1"
          </div>
          <div tabIndex={2} onClick={clickHandler} >
               "2"
          </div> */}
          <div className="formsPAr">
            <div className={`side${myIndex} style${myIndex}`} style={{opacity:`${opacity}`, left:`${transition}` }}>
            <Form1 />
            </div>
            <div className={`side${myIndex2} style${myIndex}`} style={{opacity:`${opacity2}`, left:`${transition2}`}}>
            <Form2 />
            </div>
          </div>
          <div className="btnPar">
            <button tabIndex={1} onClick={clickHandler} style={{ transform:`scale(${PrevBtn})`}}>Өмнөх</button>
            <button tabIndex={2} onClick={clickHandler} style={{ transform:`scale(${NextBtn})`}}>Дараагийн</button>
            <button tabIndex={3} onClick={clickHandler} style={{ display:`${Submit}`}}>Илгээх</button>
          </div>
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
    .Header{
      padding-top:10px;
      border-bottom:solid 0.5px rgba(255,255,255, 0.3);
      width:65%;
    }
    .formsPAr{
      position:relative;
      height:80vh;
      width:100%;
      overflow:hidden;
      .side1{
        top:0;
        width:100%;
        position:absolute;
        // background-color: rgba(0,0,0,0.5);
        transition:all 0.7s ease;
      }
      .side2{
        top:0;
        width:100%;
        position:absolute;
        // background-color: rgba(0,0,0,0.5);
        transition:all 0.7s ease;
      }
    }
    .btnPar{
      width:65%;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      margin-top:14px;
      button{
        background:none;
        color:white;
        border:solid 1px white;
        padding:2px 10px;
        transition:all 0.4s ease;
        &:hover{
          background:white;
          color:black;
        }
      }
    }
    
    
`