import React from 'react'
import styled from 'styled-components'



function workExperience(props) {
    const all = props.all
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">АЖЛЫН ТУРШЛАГА</h5>
                {/* <div className="checkboxes">
                    <label>Байхгүй : </label>
                    <input type="checkbox" id="subscribeNews" className="getinput" name="Nojob" value="newsletter"></input>
                </div> */}
            </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Албан тушаал:</span>
                        <span className="val">{all.jobname}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Байгууллагын нэр:</span>
                        <span className="val">{all.jobcompany}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Салбар:</span>
                        <span className="val">{all.jobbranch}</span>
                    </div>
                    
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Ажилд орсон он:</span>
                        <span className="val">{all.jobstartdate}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Ажлаас гарсан он:</span>
                        <span className="val">{all.jobenddate}</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default workExperience


const Container = styled.div`
    padding-top:10px;  
    .dada{
        border-bottom: solid 0.5px rgba(255,255,255, 0) !important;
    }
`