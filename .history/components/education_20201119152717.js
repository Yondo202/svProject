import React from 'react'
import styled from 'styled-components'
import {IoIosAddCircleOutline} from 'react-icons/io'

function education() {
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">ЕРӨНХИЙ МЭДЭЭЛЭЛ</h5>
                <div>
                <IoIosAddCircleOutline className="svgBtn" onClick={openModal} />
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
        </Container>
    )
}

export default education


const Container = styled.div`
`