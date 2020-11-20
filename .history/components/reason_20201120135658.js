import React from 'react'
import styled from 'styled-components'
import {RiAddLine} from 'react-icons/ri'
import Education from '../components/education'
import BonusInf from '../components/bonusInf' 




function form2() {
  
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">Манай байгууллагыг сонгох болсон шалтгаан</h5>
                </div>
                <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                    <label className="B">Англи хэл:</label>
                    <input type="textarea" />
                    </div>
                </div>

                <div className="colOne">
                <div className="main-info">
                    <label className="B">Microsoft Word:</label>
                        <select className="getinput val" name="wordoffice" placeholder="сүно">
                            <option value="" >- Үнэлгээ -</option>
                            <option value="1">10%</option>
                            <option value="2">20%</option>
                            <option value="3">30%</option>
                            <option value="4">40%</option>
                            <option value="5">50%</option>
                            <option value="6">60%</option>
                            <option value="7">70%</option>
                            <option value="7">80%</option>
                            <option value="7">90%</option>
                            <option value="7">100%</option>
                        </select>
                    </div>
                    <div className="main-info">
                    <label className="B">Хурдан бичих:</label>
                        <select className="getinput val" name="textspeed" placeholder="сүно">
                            <option value="" >- Үнэлгээ -</option>
                            <option value="1">10%</option>
                            <option value="2">20%</option>
                            <option value="3">30%</option>
                            <option value="4">40%</option>
                            <option value="5">50%</option>
                            <option value="6">60%</option>
                            <option value="7">70%</option>
                            <option value="7">80%</option>
                            <option value="7">90%</option>
                            <option value="7">100%</option>
                        </select>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default form2

const Container = styled.div`
    padding-top:10px;   
    .headerPAr{
        width:70%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-bottom:5px;
        .svgBtn{
            cursor:pointer;
            font-size:28px;
            border-radius:50%;
            transition:all 0.3s ease;
            &:hover{
                color:black;
                background:white;
            }
        }
        .checkboxes{
            cursor:pointer;
            font-size:18px;
            border-radius:50%;
            transition:all 0.3s ease;
            #subscribeNews{
            //    height:14px;
            //    width:16px;
            }
        }
    }
    .ParentInfo{
         display:flex;
         flex-direction: row;
         justify-content:space-around; 
         width:70%;
         font-size:16px;  
         border-bottom: solid 0.5px rgba(255,255,255, 0.3);
         padding-bottom:10px;
         .colOne{
             width:43%;
             .main-info{
                display:flex;
                flex-direction:row;
                justify-content:start;
                
                 .B{
                     color:rgba(255,255,255, 1);
                     width:40%;
                 }
                
                 .val{
                    border-style:none;
                    border-bottom:solid 1px white;
                    border-radius:2px;
                    width:55%;
                    background:rgba(255,255,255, 0);
                    height:24px;
                    transition:all 0.6s ease;
                    color:rgba(255,255,255,1);
                    
                    option{
                        color:black;
                    }
                    &:focus{
                        background:rgba(255,255,255, .2);
                        border-radius:0px;
                    }
                    .childs{
                        color:white;
                        height:24px;
                        width:50%;
                        border:none;
                        background:rgba(255,255,255, 0);
                        option{
                            color:black;
                        }
                        &:focus{
                            background:rgba(255,255,255, .2);
                        }
                    }
                 }
                 select{
                    color:rgba(255,255,255,0.8) !important;
                 }
             }
         }
    }
    @media only screen and (max-width:786px){
        .headerPAr{
            width:100%;
        }
        .ParentInfo{
            flex-direction: column;
            width:100%;
            .colOne{
                width:100%;
            }
        }
    }
`