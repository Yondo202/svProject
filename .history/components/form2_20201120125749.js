import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {IoIosAddCircleOutline} from 'react-icons/io'
import {RiAddLine} from 'react-icons/ri'
import Education from '../components/education'


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

function form2() {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
    setIsOpen(false);
    }
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">MS OFFICE-Н СУУРЬ МЭДЛЭГ, АНГЛИ ХЭЛ</h5>
                <div>
                <IoIosAddCircleOutline  className="svgBtn" onClick={openModal} />
                {/* <span  className="svgBtn" onClick={openModal}>+</span> */}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                        <button onClick={closeModal}>close</button>
                        <form>
                            {/* <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button> */}
                        </form>
                    </Modal>
                </div>
                </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                    <label className="B">Англи хэл:</label>
                        <select className="getinput val" name="education" >
                            <option value="" >- Сонго -</option>
                            <option value="Доктор">Доктор</option>
                            <option value="Магистр">Магистр</option>
                            <option value="Бакалавр">Бакалавр</option>
                            <option value="Мэргэшсэн">Мэргэшсэн</option>
                            <option value="Бүрэн дунд">Бүрэн дунд</option>
                        </select>
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
        </Container>
    )
}

export default form2

const Container = styled.div`
    padding-top:10px;   
    .headerPAr{
        width:70%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-bottom:5px;
        .checkboxes{
            cursor:pointer;
            font-size:18px;
            border-radius:50%;
            transition:all 0.3s ease;
            #subscribeNews{
            //    height:14px;
            //    width:16px;
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
                justify-content:start;
                
                 .B{
                     color:rgba(255,255,255, 1);
                     width:40%;
                 }
                
                 .val{
                    border-style:none;
                    border-bottom:solid 1px white;
                    border-radius:2px;
                    width:55%;
                    background:rgba(255,255,255, 0);
                    height:24px;
                    transition:all 0.6s ease;
                    color:rgba(255,255,255,1);
                    
                    option{
                        color:black;
                    }
                    &:focus{
                        background:rgba(255,255,255, .2);
                        border-radius:0px;
                    }
                    .childs{
                        color:white;
                        height:24px;
                        width:50%;
                        border:none;
                        background:rgba(255,255,255, 0);
                        option{
                            color:black;
                        }
                        &:focus{
                            background:rgba(255,255,255, .2);
                        }
                    }
                 }
                 select{
                    color:rgba(255,255,255,0.8) !important;
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