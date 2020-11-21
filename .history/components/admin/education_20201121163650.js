import React from 'react'
import styled from 'styled-components'



function education(props) {
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">БОЛОВСРОЛ</h5>
            </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Боловсрол:</span>
                        <span className="val">{props.all.Education}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Улс:</span>
                        <span className="val">{props.all.Country}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Мэргэжил:</span>
                        <span className="val">{props.all.Mergejil}</span>
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Голч дүн:</span>
                        <span className="val">{props.all.dvn}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Элссэн он:</span>
                        <span className="val">{props.all.Startdate}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Төгссөн он:</span>
                        <span className="val">{props.all.enddate}</span>
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