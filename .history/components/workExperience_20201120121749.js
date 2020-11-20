import React from 'react'
import styled from 'styled-components'



function workExperience() {
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">АЖЛЫН ТУРШЛАГА</h5>
            </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <label className="B">Албан тушаал:</label>
                        <input className="getinput val" placeholder="Албан тушаалын нэр" type="text" name="jobname" />
                    </div>
                    <div className="main-info">
                        <label className="B">Байгууллагын нэр:</label>
                        <input className="getinput val" placeholder="Албан тушаалын нэр" type="text" name="company" />
                    </div>
                    <div className="main-info">
                        <label className="B">Мэргэжил:</label>
                        <input className="getinput val" placeholder="Программист" type="text" name="mergejil" />
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <label className="B">Голч дүн:</label>
                        <input className="getinput val" placeholder="3.2" type="number" name="dvn" />
                    </div>
                    
                    <div className="main-info">
                    <label className="B">Элссэн он:</label>
                        <select className="getinput val" name="startdate" >
                            <option value="" >- Сонго -</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2015">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                        </select>
                    </div>

                    <div className="main-info">
                        <label className="B" >Төгссөн он:</label>
                        <select className="getinput val" name="enddate" >
                            <option value="" >- Сонго -</option>
                            <option value="Сурж байгаа">Сурж байгаа</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2015">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                        </select>
                    </div>
                    
                </div>
            </div>
        </Container>
    )
}

export default workExperience


const Container = styled.div`
    padding-top:10px;  
    
`