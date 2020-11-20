import React from 'react'
import styled from 'styled-components'
import {IoIosAddCircleOutline} from 'react-icons/io'
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
function education() {
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
        <Container>
            <div className="headerPAr">
                <h5 className="title">БОЛОВСРОЛ</h5>
            </div>
        </Container>
    )
}

export default education


const Container = styled.div`
    padding-top:10px;  
    
`