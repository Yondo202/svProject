import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';
import Root from '@/core/Root';
import TopLand from '@/components/Topland';
import styled from 'styled-components';
import LinedText from '@/components/shared/LinedText';
import {Parser} from 'html-to-react';
import checkLanguage from '@/components/miscs/checkLanguage';

const Team = ({team}) => {

    const ContentParser = new Parser();
    const ParsedContent = ContentParser.parse(team.Content);

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Bogd Motors LLC</title>
        <meta name="description" content="To be continued..." />
      </Head>
      <Root>
        <TopLand/>
        <Container className="container">
            <LinedText>MEET OUR TEAM</LinedText>
            <div className="content sun-editor-editable sun-editor">
                {ParsedContent}
            </div>
        </Container>
      </Root>
    </motion.div>
  );
};

export default Team;

const Container = styled.div `
    padding-top:10vh;
    padding-bottom:10vh;
    .content{
        overflow:hidden;
    }
`

export async function getServerSideProps(ctx){

    let queryString = `{team{Content}}`

    let res = await checkLanguage(queryString, ctx.req);
    return {props: {team: res.data.team}}

}