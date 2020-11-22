import React,{useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {IoIosAddCircleOutline} from 'react-icons/io'
import {RiAddLine} from 'react-icons/ri'
import Education from '../components/education'
import WorkExperience from '../components/workExperience'
// import Axios from 'axios';


function form1() {
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">ЕРӨНХИЙ МЭДЭЭЛЭЛ</h5>
            </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <label className="B">Эцэг/эхийн нэр:</label>
                        <input className="getinput val" placeholder="Овог" type="text" name="parent" />
                    </div>
                    <div className="main-info">
                        <label className="B">Нэр:</label>
                        <input className="getinput val" placeholder="Нэр" type="text" name="name" />
                    </div>
                    <div className="main-info">
                        <label className="B">Хүйс:</label>
                        <select className="getinput val" name="sex" placeholder="сүно">
                            <option value="" >- Сонго -</option>
                            <option value="Эрэгтэй">Эрэгтэй</option>
                            <option value="Эмэгтэй">Эмэгтэй</option>
                        </select>
                    </div>
                    <div className="main-info">
                        <label className="B">Төрсөн огноо:</label>
                        <div className="val">
                            <select className="getinput childs" name="year" placeholder="сүно">
                                <option value="" >- Сонго -</option>
                                <option value="man">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                            </select>
                            <select className="getinput childs" name="month" placeholder="сүно">
                                <option value="" >- Сонго -</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                      
                    </div>
                </div>

                <div className="colOne">
                     <div className="main-info">
                        <label className="B">Дүүрэг:</label>
                        <input className="getinput val" type="url" placeholder="fb://Yondok" name="facebook" />
                    </div>
                    <div className="main-info">
                    <label className="B">Ам бүл (тоо):</label>
                        <select className="getinput val" name="family" placeholder="сүно">
                            <option value="" >- Сонго -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                       
                    </div>
                    <div className="main-info">
                        <label className="B">Утас:</label>
                        <input className="getinput val" placeholder="99801406" type="number" name="phone" />
                    </div>
                    <div className="main-info">
                        <label className="B" >Email:</label>
                        <input className="getinput val" placeholder="Email@email.com" type="email" name="email" />
                    </div>
                </div>
            </div>

            <Education />
            <WorkExperience />
        </Container>
    )
}

export default form1

const Container = styled.div`
    padding-top:10px;   
    .headerPAr{
        width:70%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-bottom:5px;
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
                     width:44%;
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