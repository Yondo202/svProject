import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import Form1 from '../components/form1'
import Form2 from '../components/form2'


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

    clickHandler = (e) => {

    }

    return (
        <Conainer  className="container">

          <div className="Header">
              <h3>МИНИЙ ТУХАЙ</h3>
          </div>
          <div tabIndex={1} onClick={clickHandler}>
            <Form1 />
          </div>
          <div tabIndex={1}>
           <Form2 />
          </div>



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

`