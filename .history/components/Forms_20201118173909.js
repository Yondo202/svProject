import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import { motion } from "framer-motion";


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

    return (
        <Conainer style={{backgroundColor:"white"}} className="container">
        <div>
            <button onClick={openModal}>Open Modal</button>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
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
                    <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                    </form>
                </Modal>
            </motion.div>
        
        </div>
        </Conainer>
    )
}

export default Forms


const Conainer = styled.div`
    height:90vh;
    margin-top:5vh;
    border-radius:8px;
    z-index:0;
`