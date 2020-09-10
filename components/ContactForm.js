import React from "react";
import styled from "styled-components";
import LinedText from "@/shared/LinedText";
import H1 from "./shared/H1";

const ContactForm = () => {
    return (
        <Container className="container">
            <div className="row">
                <div className="col-md-6">
                    <LinedText red>CONTACT</LinedText>
                    <H1>
                        <strong>Schedule A Visit</strong>
                        <br />
                        Or Give Us A Call
                    </H1>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </p>
                </div>
                <div className="col-md-6 right">
                    <div
                        data-erxes-embed="s96Gsj"
                        style={{width:'100%', height:'auto'}}
                    ></div>
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
`;
