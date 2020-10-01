import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {GoPrimitiveDot} from 'react-icons/go'
import {BsChevronUp, BsChevronDown} from 'react-icons/bs'
import minimize from "../miscs/minimize";

const Carousel = ({data}) => {
    const {Slide} = data || [{Image: {url: "http://riverplaza.mn/wp-content/uploads/2018/08/1920x1066_bg2.jpg"}, _id: "test123"}]
    const [current, setCurrent] = useState(0);
    useEffect(()=>{
        document.querySelector('.toggle-container .dots').classList.add('active');
    },[]);
    useEffect(()=>{
        let elementList = [ ... document.querySelectorAll('.toggle-container .dots') ];
        elementList.forEach((el,i)=>current===i?el.classList.add('active'):el.classList.remove('active'));
    },[current])
    const dotHandler = (i) => setCurrent(i)
    const arrowHandler = (type) => {
        type === -1 ? setCurrent(current-1) : setCurrent(current+1);
        if(type === -1) return current > 0 ? setCurrent(current-1) : setCurrent(Slide.length-1);
        return current<Slide.length-1 ? setCurrent(current+1) : setCurrent(0);
    }
    return (
        <>
            <Container>
                <Slider image={minimize(Slide[current].Image, true, true)} title={Slide[current].Title}/>
                <motion.div initial={{opacity:0, y:-25}} animate={{opacity:1, y:0, transition: { delay: 2, duration:1 }}} className="toggle-container">
                    <li id="prev" onClick={()=>arrowHandler(-1)}><BsChevronUp fontSize={20} style={{marginBottom:15}}/></li>
                    {Slide.map((el,i)=><li className="dots" onClick={()=>dotHandler(i)} key={el._id}><GoPrimitiveDot/></li>)}
                    <li id="next" onClick={()=>arrowHandler(1)}><BsChevronDown fontSize={20} style={{marginTop:15}}/></li>
                </motion.div>
            </Container>
        </>
    );
};

export default Carousel;

const Slider = ({ image, title }) => (
    <AnimatePresence>
        <motion.div
            className="img"
            style={{ backgroundImage: `url(${image})` }}
            key={image}
            initial={{ y: "-100vh" }}
            animate={{
                y: 0,
                transition: { duration: 1,ease: "easeInOut", delay:0.3 },
            }}
            exit={{
                y: "100vh",
                transition: { duration: 1, ease: "easeInOut", delay:0.3 },
            }}
        >
            <motion.h1
                initial={{ opacity: 0, y: -25 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", damping: 10, stiffness: 100, delay:1.5, duration:1 },
                }}
                exit={{ opacity: 0, y: 25 }}
            >
                {title}
            </motion.h1>
        </motion.div>
    </AnimatePresence>
);

const Container = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-image: url(/img/load.jpg);
    background-color:black;
    background-repeat:no-repeat;
    background-position:center center;
    .img {
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding:15px;
    }
    h1 {
        font-size: 50px;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        font-family:Second;
    }
    .toggle-container{
        position:absolute;
        z-index:1;
        right:15px;
        top:50%;
        color:white;
        li{
            border-radius:50%;
            padding:1px;
            line-height:0px;
            margin-top:5px;
            transition:0.5s ease;
            &.dots{
                border:2px solid transparent;
            }
            &:hover{
                border-color:white;
                cursor:pointer;
            }
            &.active{
                border-color:white;
            }
            &#prev,&#next{
                &:hover{
                    transform:scale(1.3);
                }
            }
        }
    }
`;
