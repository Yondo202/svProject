import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';
import Root from '@/core/Root';
import TopLand from '@/components/TopLand';
import ContactForm from '@/components/ContactForm';
import styled from 'styled-components';
import H1 from '@/components/shared/H1';

const history = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Bogd Motors LLC</title>
        <meta name="description" content="To be continued..." />
      </Head>
      <Root>
        <Container>
            <div className="offscreen left"></div>
            <div className="offscreen right" style={{backgroundImage:'url(http://riverplaza.mn/wp-content/uploads/2020/06/River-Plaza.jpg)'}}></div>
            <div className="absolute">
                <H1>OUR <br/> HISTORY</H1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </Container>
      </Root>
    </motion.div>
  );
};

export default history;

const Container = styled.div `
    width:100vw;
    height:100vh;
    display:flex;
    position:relative;
    .left{
        flex:1;
    }
    .right{
        background:grey;
        flex:2;
    }
    .absolute{
        position:absolute;
        left:0;
        top:10vh;
        bottom:10vh;
        width:40vw;
        background:#f7f7f7;
        display:flex;
        padding: 5vw 5vh;
        flex-direction:column;
        justify-content:space-around;
        h1{
            font-weight:bold;
            text-align:right;
        }
        p{
            text-align:right;
        }
    }
`