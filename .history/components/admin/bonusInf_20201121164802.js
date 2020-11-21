import React from 'react'
import styled from 'styled-components'
import {RiAddLine} from 'react-icons/ri'

function bonusInf(props) {
    const all = props.all
    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">НЭМЭЛТ МЭДЭЭЛЭЛ</h5>
                </div>
                <div id="ThisStyle" className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Цалингийн хүлээлт:</span>
                        <span className="val">Гантулга</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Ажиллах боломжтой цагийн хуваарь:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                </div>

               
            </div>
        </Container>
    )
}

export default bonusInf

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
    #ThisStyle{
         display:flex;
         flex-direction: row;
         justify-content:space-between; 
         padding-left:24px;
         width:70%;
         font-size:16px; 
         border-bottom: solid 0.5px rgba(255,255,255, 0.3);
         padding-bottom:10px;
         .colOne{
             width:66%;
             .main-info{
                display:flex;
                flex-direction:row;
                justify-content:start;
                
                 .B{
                     color:rgba(255,255,255, 1);
                     width:60%;
                 }
                
                 .val{
                    border-style:none;
                    border-radius:2px;
                    width:40%;
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
        #ThisStyle{
            padding-left:0px;
            flex-direction: column;
            width:95%;
            .colOne{
                width:100%;
            }
        }
    }
`