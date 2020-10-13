import React from "react";
import styled from "styled-components";
import LinedText from "@/shared/LinedText";
import H1 from "./shared/H1";
import {Parser} from 'html-to-react'
const parser = new Parser();

const ContactForm = ({data}) => {
    return (
        <Container className="container">
            <div className="row">
                <div className="col-md-6">
                    <LinedText red>{data.Caption && data.Caption}</LinedText>
                    <H1>{data.Title && data.Title.includes("|") ? <SemiBreak data={data.Title}/> : data.Title}</H1>
                    <p>{data.Description && data.Description}</p>
                </div>
                <div className="col-md-6 right" dangerouslySetInnerHTML={{
                    __html: `${data.Erxes}`
                }}>
                </div>
            </div>
        </Container>
    );
};

export default ContactForm;

const Container = styled.div`
    padding-top: 10vh;
    padding-bottom: 10vh;
    .right {
        input {
            background: ${(props) => props.theme.lightGrey};
            border: none;
            border-radius: 0px;
            height: 45px;
            &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                opacity: 0.6; /* Firefox */
            }
        }
        textarea {
            background: ${(props) => props.theme.lightGrey};
            border: none;
            width: 100%;
            border-radius: 0px;
            resize: none;
            &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                opacity: 0.6; /* Firefox */
            }
        }
        .btn {
            border: none;
            border-radius: 0px;
            background: ${(props) => props.theme.mainRed};
            width: 100%;
            color: white;
        }
    }
    @media (max-width: 768px){
        h1{
            font-size: ${({theme})=>theme.fontSizeBigM};   
        }
    }
`;

const SemiBreak = ({data}) => {
    let prepare = data.split("|");
    return (
        <>
            <strong>{prepare[0]}</strong>
            <br />
            {prepare[1]}
        </>
    )
}