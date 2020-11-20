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
                        <label className="B">Боловсрол:</label>
                        <select className="getinput val" name="education" >
                            <option value="" >- Сонго -</option>
                            <option value="Доктор">Доктор</option>
                            <option value="Магистр">Магистр</option>
                            <option value="Бакалавр">Бакалавр</option>
                            <option value="Мэргэшсэн">Мэргэшсэн</option>
                            <option value="Бүрэн дунд">Бүрэн дунд</option>
                        </select>
                    </div>
                    <div className="main-info">
                        <label className="B">Улс:</label>
                        <select className="getinput val" name="country" >
                            <option value="" >- Сонго -</option>
                            <option value="Монгол">Монгол</option>
                            <option value="Орос">Орос</option>
                            <option value="Хятад">Хятад</option>
                            <option value="Солонгос">Солонгос</option>
                            <option value="Америк">Америк</option>
                            <option value="Австрали">Австрали</option>
                        </select>
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

export default education


const Container = styled.div`
    padding-top:10px;  
    
`