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
                <div id="TextArea" className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                    <label className="B">Манай байгууллага таны зорилготой нэгдэж байгаа эсэх:</label>
                        <textarea className="reasonText" name="reason"  type="textarea" placeholder="80 үгэнд багтаан бичнэ үү" />
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
    #TextArea{
         display:flex;
         flex-direction: row;
         justify-content:space-around; 
         width:70%;
         font-size:16px;  
         border-bottom: solid 0.5px rgba(255,255,255, 0.3);
         padding-bottom:10px;
         padding-left:24px;
         .colOne{
             width:100%;
             .main-info{
                display:flex;
                flex-direction:row;
                justify-content:start;
                
                 .B{
                     color:rgba(255,255,255, 1);
                     width:60%;
                 }
                
                 .reasonText{
                    border-style:none;
                    border:solid 1px white;
                    border-radius:2px;
                    width:55%;
                    background:rgba(255,255,255, 0);
                    height:80px;
                    transition:all 0.6s ease;
                    color:rgba(255,255,255,1);
                    option{
                        color:black;
                    }
                    &:focus{
                        border-bottom:solid 1px white;
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
        #TextArea{
            flex-direction: column;
            width:95%;
            padding-left:0px;;
            .colOne{
                width:100%;
            }
        }
    }
`