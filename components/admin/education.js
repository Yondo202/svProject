import React from 'react'
import styled from 'styled-components'



function education() {
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">БОЛОВСРОЛ</h5>
            </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Боловсрол:</span>
                        <span className="val">Гантулга</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Улс:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Мэргэжил:</span>
                        <span className="val">Эр</span>
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Голч дүн:</span>
                        <span className="val">3 (Ээж, Эмэгтэй дүү)</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Элссэн он:</span>
                        <span className="val">99801406</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Төгссөн он::</span>
                        <span className="val">yondooo61@gmail.com</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default education


const Container = styled.div`
    padding-top:10px;  
    
`