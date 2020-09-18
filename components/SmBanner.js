import React from 'react';
import styled from 'styled-components';
import Slug from '@/miscs/Slug';

const SmBanner = () => {
    return (
        <Container className="container-fluid" style={{backgroundImage: 'url(https://www.toursmongolia.com/uploads/5db67cd6-0cfc-4cec-a18b-4a97a2f1e629-capital_city_ulaanbaatar.JPG)'}}>
            <div className="row">
                <div className="col-md-12" style={{height:'10vh'}}></div>
                <div className="col-md-12 bottom">
                    <h1 style={{marginBottom:50}}>Мэдээ мэдээлэл</h1>
                    <Slug/>
                </div>
            </div>
        </Container>
    );
};

export default SmBanner;

const Container = styled.div `
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    .row{
        background: rgba(0,0,0,0.6);
    }
    .bottom{
        padding-top:10vh;
        padding-bottom:10vh;
        color:white;
        h1{
            text-align:center;
            font-weight:300;
            font-size: ${props => props.theme.fontSizeBig};
        }
        .Slug{
            text-align:center;
        }
    }
`