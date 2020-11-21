import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import { IoIosAddCircleOutline } from 'react-icons/io'
import { RiAddLine } from 'react-icons/ri'
import Education from '@/components/admin/education'
import WorkExperience from '@/components/admin/workExperience'
// import Axios from 'axios';


function form1(props) {
    // const handleClick = async (e) =>{
    //     e.preventDefault();
    //     let rs = document.querySelectorAll('.getinput');
    //     let arr = Array.from(rs);
    //     let final = {};
    //     arr.map(element=>{
    //         let field = element.name;
    //         let value = element.value;
    //         final[field] = value
    //     });
    //     console.log(final, "kekeke")
    //     await Axios.post('http://localhost:1337/forms', final);
    // }


    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">ЕРӨНХИЙ МЭДЭЭЛЭЛ</h5>
            </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">{props.all.parent}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Нэр:</span>
                        <span className="val">{props.all.name}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Хүйс:</span>
                        <span className="val">{props.all.sex}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Төрсөн огноо:</span>
                        <span className="val">{props.all.Year}-{props.all.Month} </span>
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Ам бүл:</span>
                        <span className="val">{props.all.Family}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Утас:</span>
                        <span className="val">{props.all.phone}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Email:</span>
                        <span className="val">{props.all.email}</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Facebook:</span>
                        <span className="val">{ props.all.facebook }</span>
                    </div>
                </div>
            </div>
            <Education all={props.all} />
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
                     color:rgba(255,255,255, 0,8);
                     width:44%;
                 }
                
                 .val{
                    border-style:none;
                    border-radius:2px;
                    width:55%;
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