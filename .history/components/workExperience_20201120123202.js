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
                        <input className="getinput val" placeholder="Албан Байгууллагын нэр" type="text" name="jobcompany" />
                    </div>
                    <div className="main-info">
                        <label className="B">Салбар:</label>
                        <select  id="SelectSpeac" className="getinput val" name="jobbranch" >
                            <option value="" >- Сонго -</option>
                            <option value="Автомашин, авто засвар үйлчилгээ">Автомашин, авто засвар үйлчилгээ</option>
                            <option value="Аялал жуулчлал, зочид буудал, нийтийн хоолны үйлчилгээ">Аялал жуулчлал, зочид буудал, нийтийн хоолны үйлчилгээ</option>
                            <option value="Банк, Санхүү, Даатгал">Банк, Санхүү, Даатгал</option>
                            <option value="Барилга, Үл хөдлөх хөрөнгө">Барилга, Үл хөдлөх хөрөнгө</option>
                            <option value="Боловсрол, Шинжлэх ухаан">Боловсрол, Шинжлэх ухаан</option>
                            <option value="Гааль, татвар">Гааль, татвар</option>
                            <option value="Мэдээлэл технологи, Харилцаа холбоо">Мэдээлэл технологи, Харилцаа холбоо</option>
                            <option value="Төрийн байгууллага, Төрийн өмчит компани">Төрийн байгууллага, Төрийн өмчит компани</option>
                            <option value="Төрийн бус байгууллага">Төрийн бус байгууллага</option>
                            <option value="Соёл урлаг, Спорт">Соёл урлаг, Спорт</option>
                            <option value="Уул уурхай">Уул уурхай</option>
                        </select>
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <label className="B">Голч дүн:</label>
                        <input className="getinput val" placeholder="3.2" type="number" name="dvn" />
                    </div>
                    
                    <div className="main-info">
                    <label className="B">Ажилд орсон:</label>
                        <select className="getinput val" name="jobstartdate" >
                            <option value="" >- Огноо -</option>
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
                        <label className="B" >Ажлаас гарсан:</label>
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