import React, { useState } from 'react'
import styled from 'styled-components'
import Form1 from '@/components/admin/form1'
import Form2 from '@/components/admin/form2'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


function Forms(props) {
  const [myIndex, setMyIndex] = useState(1);
  const [myIndex2, setMyIndex2] = useState(2);
  const [opacity, setopacity] = useState("1");
  const [opacity2, setopacity2] = useState("0");
  const [display, setDisplay] = useState('block');
  const [display2, setDisplay2] = useState('none');
  const [transition, setTransition] = useState('0%');
  const [transition2, setTransition2] = useState('-100%');
  const [PrevBtn, setPrevBtn] = useState(0);
  const [NextBtn, setNextBtn] = useState(1);
  const [Submit, setSubmit] = useState("none");
  const [background, setBackground] = useState("white");
  const [background2, setBackground2] = useState("none");
  const [colorSet, setColoSet] = useState("black");
  const [colorSet2, setColoSet2] = useState("white");
  const clickHandler = (e) => {
    // console.log(e.target.tabIndex, "hgahahah")
    if (e.target.tabIndex === 1) {
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
      setBackground("white");
      setBackground2("none");
      setColoSet("black")
      setColoSet2("white")
    } else if (e.target.tabIndex === 2) {
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
      setBackground("none");
      setBackground2("white");
      setColoSet("white")
      setColoSet2("black")
    }
  }

  console.log(props.all, 'myData')

  return (
    <Conainer className="container">
      <div className="Header">
        <div className="backPar">
          <h2 className="one">{`<`}</h2>
          <h2 className="tow">{`<`}</h2>
        </div>
        <h3>{props.all.parent} {props.all.name}</h3>
        <div className="pageCountPAr">
          <div style={{ background: `${background}`, color: `${colorSet}` }} tabIndex={1} onClick={clickHandler} className=" One">1</div>
          <div className="line"></div>
          <div style={{ background: `${background2}`, color: `${colorSet2}` }} tabIndex={2} onClick={clickHandler} className=" Two">2</div>
        </div>
      </div>
      <div className="formsPAr">
        <div className={`side${myIndex} style${myIndex}`} style={{ opacity: `${opacity}`, left: `${transition}` }}>
          <Form1 all={props.all} />
        </div>
        <div className={`side${myIndex2} style${myIndex}`} style={{ opacity: `${opacity2}`, left: `${transition2}` }}>
          <Form2 all={props.all} />
        </div>
      </div>
      <div className="btnPar">
        <button type="button" tabIndex={1} onClick={clickHandler} style={{ transform: `scale(${PrevBtn})` }}>Өмнөх</button>
        <button type="button" tabIndex={2} onClick={clickHandler} style={{ transform: `scale(${NextBtn})` }}>Дараагийн</button>
        <button type="button" tabIndex={3} onClick={clickHandler} style={{ display: `${Submit}` }}>Хэвлэх (pdf)</button>
      </div>

    </Conainer>
  )
}

export default Forms


const Conainer = styled.div`
    height:100vh;
    // margin-top:5vh;
    border-radius:8px;
    z-index:0;
    font-family: "Poppins', sans-serif";
    color:white;
    .Header{
      padding-top:10px;
      border-bottom:solid 0.5px rgba(255,255,255, 0.3);
      width:70%;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      .backPar{
        display:flex;
        flex-direction:row;
        transition:all 0.4s ease;
        cursor:pointer;
        background:rgba(255,255,255,0.5);
        padding:0px 5px;
        height:80%;
        .tow{
          transition:all 0.4s ease;
          transform:scale(0);
        }
        &:hover{
          .tow{
            transform:scale(1);
          }
        }
      }
      .pageCountPAr{
        display:flex;
        align-items:center;
        margin-bottom:8px;
        .One{
          cursor:pointer;
          font-weight:600;
          border:solid 1px white;
          padding:0px 8px;
          border-radius:50%;
          background:white;
        }
        .Two{
          cursor:pointer;
          font-weight:600;
          border:solid 1px white;
          padding:0px 8px;
          border-radius:50%;
        }
        .line{
          height:2px;
          width:26px;
          background:rgba(255,255,255, 0.5);
        }
      }
    }
    .formsPAr{
      position:relative;
      height:80vh;
      width:100%;
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 0px;
      }
      .side1{
        top:0;
        width:100%;
        position:absolute;
        // background-color: rgba(0,0,0,0.5);
        transition:all 0.7s ease;
        .RedPar{
          background:rgba(255,0,0,0.3) !important;
        }
      }
      .side2{
        top:0;
        width:100%;
        position:absolute;
        // background-color: rgba(0,0,0,0.5);
        transition:all 0.7s ease;
        .RedPar{
          background:rgba(255,0,0,0.3) !important;
        }
      }
    }
    .btnPar{
      width:70%;
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
    @media only screen and (max-width:786px){
      .Header{
        width:100%;
      }
      .btnPar{
        width:100%;
      }
    }
    
`