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

function Forms() {
    return (
        <Conainer style={{backgroundColor:"white"}} className="container">
            <h2>dadada</h2>
            <h2>dadada</h2>
            <h2>dadada</h2>
            <h2>dadada</h2>
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