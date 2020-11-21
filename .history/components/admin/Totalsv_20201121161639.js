import React from 'react'
import styled from 'styled-components'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import  Link from 'next/link'
function Totalsv(props) {
    console.log(props.all[0].Slug, 'this is slug')
    return (
        <Container className="container">
            <h1>Нийт анкет</h1>
            <div className="row">
                {props.all.map((el, i) => {
                    return (
                        <div className="col-md-6" key={i}>
                            <Link href="/admin/[slug]" as={`/admin/${el.Slug}`}>
                                    <div className="userPar">
                                        <div className="profilePic">
                                            <img src="/img/avatar.png" />
                                        </div>
                                        <div className="userInf">
                                            <span className="Name">{el.parent} {el.name}</span>
                                            <div className="InfSmPar">
                                                <div className="mergejil">
                                                    <span>Мэргэжил: {el.mergejil}</span>
                                                    <span>Боловсрол: {el.education}</span>
                                                </div>
                                                <div className="bonusInf">
                                                    <span><FiPhone />{el.phone}</span>
                                                    <span><AiOutlineMail />{el.email}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </Link>
                        </div>
                    )
                })}
                {/* <div className="col-md-6">
                    <div className="userPar">
                        <div className="profilePic">
                            <img src="/img/avatar.png" />
                        </div>
                        <div className="userInf">
                            <span className="Name">Баасандорж Ганбаатар</span>
                            <div className="InfSmPar">
                                <div className="mergejil">
                                    <span>Мэргэжил: Барилгачин</span>
                                    <span>Туршлага: 6 сар</span>
                                </div>
                                <div className="bonusInf">
                                    <span><FiPhone />99801406</span>
                                    <span><AiOutlineMail />yondooo61@gmail.com</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </Container>
    )
}

export default Totalsv

const Container = styled.div`
    font-family: "Poppins', sans-serif";
    color:black;

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
        &:hover{
            -webkit-box-shadow: 1px 6px 18px -7px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 1px 6px 18px -7px rgba(0, 0, 0, 0.75);
            box-shadow: 8px 6px 16px -6px rgba(0, 0, 0, 0.75);
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
            width:70%;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            .Name{
                transition:all 0.4s ease;
                font-size:19px;
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
            height:90px;
            .profilePic{
                width:18%;
                img{
                    width:60px;
                    height:60px;
                    object-fit:cover;
                }
            }
            .userInf{
                width:80%;
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