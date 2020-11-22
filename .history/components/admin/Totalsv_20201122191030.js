import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'

function Totalsv(props) {
    var today = new Date();
    const CurrentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    // console.log(CurrentDate, "date irleee")
    // console.log(props.all, 'myAlldata')
    return (
        <Container className="container">
            <div className="headerPar">
             <h2>Нийт анкет</h2>
            </div>
            <div className="row">
                {props.all.map((el, i) => {
                    return (
                        <div className="col-md-6" key={i}>
                            <Link href="/admin/[id]" as={`/admin/${el.id}`} passHref >
                                <div className="userPar">
                                    <div className="profilePic">
                                        <img src="/img/avatar.png" />
                                    </div>
                                    <div className="userInf">
                                        <a >
                                            <span className="Name">{el.parent} {el.name}</span>
                                        </a>
                                        <div className="InfSmPar">
                                            <div className="mergejil">
                                                <span>Мэргэжил: {el.mergejil}</span>
                                                <span>Боловсрол: {el.education}</span>
                                            </div>
                                            <div className="bonusInf">
                                                <span><FiPhone />{el.phone}</span>
                                                {CurrentDate === el.createdAt.slice(0,10) ? (<span><FiSend />Өнөөдөр</span>) : (<span><FiSend /> {el.createdAt.slice(0,10)}</span>)  }
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Totalsv

const Container = styled.div`
    font-family: "Poppins', sans-serif";
    color:black;
    .headerPar{
        border-bottom:1px solid #00818A;
        margin-bottom:8px;
        
    }
    .userPar{
        -webkit-box-shadow: 1px 6px 18px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 6px 18px -7px rgba(0, 0, 0, 0.75);
        box-shadow: 8px 6px 16px -12px rgba(0, 0, 0, 0.75);
        // border:1px solid black;
        border-radius:8px;
        height:100px;
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        cursor:pointer;
        transition:all 0.4s ease;
        margin-bottom:14px;
        background-color:white;
        &:hover{
            -webkit-box-shadow: 1px 6px 18px -7px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 1px 6px 18px -7px rgba(0, 0, 0, 0.75);
            box-shadow: 8px 6px 16px -4px rgba(0, 0, 0, 0.75);
            .Name{
                color: #00818A;
                font-size:19px;
            }
        }
        .profilePic{
            width:22%;
            img{
                width:90px;
                height:90px;
                object-fit:cover;
            }
        }
        .userInf{
            width:73%;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            a{
                color:black;
                text-decoration: none; 
            }
            .Name{
                transition:all 0.4s ease;
                font-size:20px;
            }
            .InfSmPar{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                color:rgba(0,0,0,0.8);
                .mergejil{
                    display:flex;
                    flex-direction:column;
                    
                }
                .bonusInf{
                    display:flex;
                    flex-direction:column;
                    svg{
                        margin-right:5px;
                    }
                }
            }
            
        }
    }
    @media only screen and (max-width:786px){
        .userPar{
            flex-direction:column;
            justify-content:center;
            height:100%;
            .profilePic{
                width:18%;
                img{
                    width:60px;
                    height:60px;
                    object-fit:cover;
                }
            }
            .userInf{
                width:96%;
                .Name{
                    font-size:15px;
                }
                .InfSmPar{
                    font-size:13px;
                }
            }
            
        }
    }

`