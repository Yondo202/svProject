import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import {IoIosAddCircleOutline} from 'react-icons/io'
import {RiAddLine} from 'react-icons/ri'
import Education from '@/components/admin/education'
import BonusInf from '@/components/admin/bonusInf' 
import Reason from '@/components/admin/reason'




function form2(props) {
   const all = props.all
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">MS OFFICE-Н СУУРЬ МЭДЛЭГ, АНГЛИ ХЭЛ</h5>
                
                </div>
                <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Англи хэл:</span>
                        <span className="val">{all.English}%</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Microsoft Excel:</span>
                        <span className="val">{all.wordexcel}%</span>
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Microsoft Word:</span>
                        <span className="val">{all.wordoffice}%</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Хурдан бичих:</span>
                        <span className="val">99801406</span>
                    </div>
                    
                </div>
            </div>
            <BonusInf />
            <Reason />
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
    }
    .ParentInfo{
         display:flex;
         flex-direction: row;
         justify-content:space-around; 
         width:70%;
         font-size:16px;  
         border-bottom: solid 0.5px rgba(255,255,255, 0);
         padding-bottom:10px;
         .colOne{
             width:43%;
             .main-info{
                display:flex;
                flex-direction:row;
                justify-content:start;
                
                 .B{
                     color:rgba(255,255,255, 0,5);
                     width:40%;
                 }
                
                 .val{
                    border-style:none;
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