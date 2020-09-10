import React, {useEffect} from 'react';
import styled from 'styled-components';

const test = () => {

    useEffect(()=>{
        // element.getBoundingClientRect().left
        let element = document.querySelector('#box');
        let left = element.getBoundingClientRect().left;
        let right = element.getBoundingClientRect().right;
        let width = right - left
        let height = width * 56.25 / 100
        element.style.height = height + 'px'
    },[])

    return (
        <Con>
            <Box id="box" style={{backgroundImage: 'url(http://192.168.10.88:1341/uploads/cotton_candy_blue_1920x1080_1860x1046_fc5cd9f040.jpg)'}}>
            <div className="shape">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="1043.000000pt" height="647.000000pt" viewBox="0 0 1043.000000 647.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,647.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M4518 5511 l-4498 -956 0 -2262 c0 -1800 -3 -2262 -12 -2266 -10 -4
                    -10 -7 0 -18 10 -11 12 -10 12 4 0 16 313 17 5205 17 l5205 0 0 22 c0 95 -90
                    5329 -92 5350 -3 22 -114 116 -643 547 -396 322 -648 520 -660 520 -11 -1
                    -2044 -432 -4517 -958z"/>
                    </g>
                </svg>
            </div>
            </Box>
        </Con>
    );
};

export default test;

const Box = styled.div `
    width:100%;
    background-size: cover;
    position:relative;
    .shape{
        position:absolute;
        bottom:-0.5%;
        left:22.6%;
        width:56.6%;
        svg{
            width:100%;
            height:100%;
            g{
                fill:rgba(0,0,0,0.0);
                transition: 2s all ease;
                cursor:pointer;
                &:hover{
                    ${'' /* fill:rgba(6,64,101,0.7); */}
                    fill:#efdcf2;
                }
            }
        }
    }
`
const Con = styled.div `
    width:100%;
    padding:30px;
`