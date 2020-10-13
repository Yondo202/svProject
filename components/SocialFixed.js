import React from 'react';
import styled from 'styled-components';
import {TiSocialFacebook} from 'react-icons/ti'
import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share'

const SocialFixed = ({url}) => {
    let path = window.location.origin + '/news/' + url
    return (
        <Wrapper>
            <FacebookShareButton url={path}>
                <div className="icons">
                    <TiSocialFacebook/>
                </div>
            </FacebookShareButton>
            <TwitterShareButton url={path}>
                <div className="icons">
                    <FaTwitter/>
                </div>
            </TwitterShareButton>
            <LinkedinShareButton url={path}>
                <div className="icons">
                    <FaLinkedinIn/>
                </div>
            </LinkedinShareButton>
        </Wrapper>
    );
};

export default SocialFixed;

const Wrapper = styled.div `
    margin-left:-75px;
    position:fixed;
    display:flex;
    flex-direction:column;
    .icons{
        text-align:center;
        line-height:42px;
        background:${props=>props.theme.mainRed};
        color:white;
        height:42px;
        width:42px;
        border-radius:100%;
        box-shadow:6px 6px 10px rgba(0,0,0,.08);
        transition:0.2s ease;
        margin-bottom:20px;
        font-size: ${props=>props.theme.fontSizeMediumM};
        &:hover{
            cursor:pointer;
        }
    }
    @media only screen and (max-width: 768px){
        position: unset !important;
        flex-direction:row-reverse !important;
        margin-left:unset !important;
        .icons{
            margin-left:15px;
            font-size: ${props=>props.theme.fontSize};
            height:30px;
            width:30px;
            line-height:30px;
        }
    }
`