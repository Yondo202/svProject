import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import TopLand from "@/components/Topland";
import Team from "@/components/Team";
import BgBanner from "@/components/Bigbanner";
import Goals from "@/components/Gridcarousel";
import GetInTouch from '@/components/Getintouch';
import StructureClick from '@/components/Interactiveboard';
import CardFeature from '@/components/Cardfeature.js';
import NewsGrid from '@/components/Newsgrid';
import MapContact from '@/components/Mapcontact';
import LinedGrid from "@/components/Linedgrid";
import FourGrid from "@/components/FourGrid";
import BigFeature from "@/components/BigFeature";
import FiveGrid from '@/components/Manygrids';

const Index = () => {

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Head>
                <title>Tavan Bogd Properties</title>
                <meta name="description" content="To be continued..." />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Root>
                <TopLand/>
                <Goals/>
                <LinedGrid/>
                <FiveGrid/>
                <NewsGrid />
                <Goals/>
                <StructureClick/>
                <CardFeature/>
                <MapContact/>
            </Root>
        </motion.div>
    );
};
export default Index;

// let increaser = 3

// const queryString = `
// {
//     medees (limit: ${increaser}, sort: "createdAt:ASC") {
//       title
//       slug
//       Description
//       Thumb {
//         url
//         formats
//       }
//       createdAt
//     }
//   }
// `;

// const httpObject = { method: 'post', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({ query: `query ${queryString}`})}

// export async function getServerSideProps(ctx){

//     let data = await checkLanguage(httpObject, ctx.req);
//     return {props: {news: data.data.medees}}

// }
