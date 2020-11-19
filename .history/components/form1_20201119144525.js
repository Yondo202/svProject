import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
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
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#0E3232';
      }
    function closeModal(){
    setIsOpen(false);
    }
    return (
        <Conainer>
            <div className="headerPAr">
                <h3 className="title">ЕРӨНХИЙ МЭДЭЭЛЭЛ</h3>
                <div>
                <button onClick={openModal}>Modal</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                        <button onClick={closeModal}>close</button>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form>
                    </Modal>
                    </div>
                </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">Гантулга</span>
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

        </Conainer>
    )
}

export default form1

const Conainer = styled.div`
    padding-top:10px;   
    .headerPAr{
        width:65%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    .ParentInfo{
         display:flex;
         flex-direction: row;
         justify-content:space-between; 
         width:65%;
         font-size:17px;  
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
`