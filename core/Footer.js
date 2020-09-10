import React, { useContext } from "react";
import styled from "styled-components";
import { BsHouseFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaGripLinesVertical,
} from "react-icons/fa";
import { MenuContext } from "@/components/miscs/ContextMenuProvider";
import minimize from "@/components/miscs/minimize";

const Footer = () => {
    const {information} = useContext(MenuContext);
    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="title"><img style={{height:150}} src={minimize(information.Logo2, true)}/></div>
                    </div>
                    <div className="col-md-3">
                        <div className="title">Links</div>
                    </div>
                    <div className="col-md-3">
                        <div className="title">Instagram</div>
                    </div>
                    <div className="col-md-3">
                        <div className="title">Contact us</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="top">
                            <p>
                                <BsHouseFill />
                                <span>{information.Location}</span>
                            </p>
                            <p>
                                <GrMail />
                                <span>{information.Email}</span>
                            </p>
                        </div>
                        <div className="bottom">
                            <p>Follow us:</p>
                            <div className="social-link">
                                <span>
                                    <a href={information.Facebook}><FaFacebookF /></a>
                                </span>
                                <span>
                                    <a href={information.Twitter}><FaTwitter /></a>
                                </span>
                                <span>
                                    <a href={information.Youtube}><FaYoutube /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="other">
                            <li>Property on sale</li>
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="other">
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="other">
                            <p className="phone">
                                <FaPhoneAlt /> 1-800-555-123
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    padding-top: 10vh;
    padding-bottom: 10vh;
    background-color: ${(props) => props.theme.lightGrey};
    .top {
        margin-bottom: 25px;
        p {
            display: flex;
            svg {
                font-size: 20px;
                margin-right: 10px;
                color: ${(props) => props.theme.mainRed};
            }
            span {
                margin-top: -2px;
            }
        }
    }
    .bottom {
        .social-link {
            span {
                display: inline-block;
                text-align: center;
                line-height: 27.5px;
                width: 30px;
                height: 30px;
                border-radius: 100%;
                color: white;
                background: ${(props) => props.theme.mainRed};
                margin-right: 15px;
            }
        }
    }
    .title {
        color: ${(props) => props.theme.mainRed};
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 5vh;
    }
    .other {
        p {
            color: ${(props) => props.theme.mainRed};
        }
        li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
            padding-bottom: 10px;
        }
        .phone {
            svg {
                font-size: 12px;
                margin-top: -3px;
                margin-right: 5px;
            }
        }
    }
`;
