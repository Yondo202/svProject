import React, { useContext } from "react";
import styled from "styled-components";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram
} from "react-icons/fa";
import { MenuContext } from "@/components/miscs/ContextMenuProvider";
import minimize from "@/components/miscs/minimize";

const Footer = () => {
    const {information} = useContext(MenuContext);
    return (
        <Container>
            <div className="container">
                <div className="row">
                <div className="col-md-3 left lineup">
                    <img src={minimize(information.Logo2, true)} />
                </div>
                <div className="col-md-6 middle lineup">
                    <div className="box">
                        <img src={minimize(information.LocationIcon, true)}/>
                        <div>
                            <h4 className="caption">{information.LocationCaption}</h4>
                            <p>{information.Location}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={minimize(information.EmailIcon, true)}/>
                        <div>
                            <h4 className="caption">{information.EmailCaption}</h4>
                            <p>{information.Email}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 right lineup">
                    <div className="box">
                        <img src={minimize(information.PhoneIcon, true)}/>
                        <div>
                            <h4 className="caption">{information.PhoneCaption}</h4>
                            <p>{information.Phone}</p>
                        </div>
                    </div>
                    <div className="socials">
                        <a href={information.Facebook} target="_blank">
                            <div className="back">
                                <FaFacebookF/>
                            </div>
                        </a>
                        
                        <a href={information.Twitter} target="_blank">
                            <div className="back">
                                <FaTwitter/>
                            </div>
                        </a>
                        
                        <a href={information.Youtube} target="_blank">
                            <div className="back">
                                <FaYoutube/>
                            </div>
                        </a>

                        <a href={information.Instagram} target="_blank">
                            <div className="back">
                                <FaInstagram/>
                            </div>
                        </a>
                        
                    </div>
                </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    padding-top: 45px;
    padding-bottom: 60px;
    background-color: ${(props) => props.theme.lightGrey};
    .left{
        img{
            width:150px;
        }
    }
    .lineup{
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        div{
            &:first-child{
                margin-bottom:20px;
            }
        }
        .box{
            display:flex;
            .caption{
                color:${props=>props.theme.mainRed};
                margin-bottom:3px;
                font-family: Second;
            }
            img{
                width:40px;
                margin-right:30px;
            }
            p{
                margin-bottom:0px;
            }
        }
        .socials{
            display:flex;
            padding-top: 15px;
            justify-content:space-between;
            .back{
                height:40px;
                width:40px;
                background:${props=>props.theme.mainRed};
                display:flex;
                justify-content:center;
                align-items:center;
                color:white;
                border-radius:100%;
                margin-bottom:0px !important;
            }
        }
    }
`;
