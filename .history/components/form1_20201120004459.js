import React,{useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {IoIosAddCircleOutline} from 'react-icons/io'
import {RiAddLine} from 'react-icons/ri'
import Education from '../components/education'
import Axios from 'axios';


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

function form1() {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
    setIsOpen(false);
    }
    const [Value,setValue] = useState('хоосон');

    const handleChange =(event) => {
        setValue(event.target.value);
        console.log(event.target.value);
      }

    const handleClick = async (e) =>{
        e.preventDefault();
        let rs = document.querySelectorAll('.getinput');
        let arr = Array.from(rs);
        let final = {};
        arr.map(element=>{
            let field = element.name;
            let value = element.value;
            final[field] = value
        });
        await Axios.post('http://localhost:1337/forms', final);
    }
    // const capitalize = (s) => {
    //     if (typeof s !== 'string') return ''
    //     return s.charAt(0).toUpperCase() + s.slice(1)
    //   }

    return (
        <Conainer>
            <div className="headerPAr">
                <h5 className="title">ЕРӨНХИЙ МЭДЭЭЛЭЛ</h5>
                <div>
                <IoIosAddCircleOutline className="svgBtn" onClick={openModal} />
                    <Modal
                        isOpen={modalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className="closePar">
                         <span className="CloseBtn" onClick={closeModal}>X</span>
                        </div>

                        <form onSubmit={handleClick}>
                            <div className="FormItems">
                                <label>Эцэг/эхийн нэр:</label>
                                <input className="getinput" type="text" value={Value} onChange={handleChange} name="parent" />
                            </div>
                            <div className="FormItems">
                                <label>Нэр:</label>
                                <input className="getinput" type="text" name="name" />
                            </div>
                            <div className="FormItems">
                                <label>Хүйс:</label>
                                <select className="getinput" name="sex" placeholder="сүно">
                                    <option value="" >Сонго</option>
                                    <option value="man">Эрэгтэй</option>
                                    <option value="women">Эмэгтэй</option>
                                </select>
                            </div>
                                <button type="submit">Болсон</button>
                        </form>
                    </Modal>
                    </div>
                </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">{Value}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Нэр:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Хүйс:</span>
                        <span className="val">Эр</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Төрсөн огноо:</span>
                        <span className="val">1996-05-10</span>
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Ам бүл:</span>
                        <span className="val">3 (Ээж, Эмэгтэй дүү)</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Утас:</span>
                        <span className="val">99801406</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Email:</span>
                        <span className="val">yondooo61@gmail.com</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Facebook:</span>
                        <span className="val">fb://yondok</span>
                    </div>
                </div>
            </div>

            <Education />
        </Conainer>
    )
}

export default form1

const Conainer = styled.div`
    padding-top:10px;   
    .headerPAr{
        width:70%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-bottom:5px;
        .svgBtn{
            cursor:pointer;
            font-size:28px;
            border-radius:50%;
            transition:all 0.3s ease;
            &:hover{
                color:black;
                background:white;
            }
        }
    }
    .ParentInfo{
         display:flex;
         flex-direction: row;
         justify-content:space-around; 
         width:70%;
         font-size:16px;  
         border-bottom: solid 0.5px rgba(255,255,255, 0.3);
         padding-bottom:10px;
         .colOne{
             width:43%;
             .main-info{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                
                 .B{
                     color:rgba(255,255,255, 0.7);
                     width:40%;
                 }
                 .val{
                    // margin-left:15px;
                    width:55%;
                 }
             }
         }
    }
    @media only screen and (max-width:786px){
        .headerPAr{
            width:100%;
        }
        .ParentInfo{
            flex-direction: column;
            width:100%;
            .colOne{
                width:100%;
            }
        }
    }
`