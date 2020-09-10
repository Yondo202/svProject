import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import SmBanner from "@/components/SmBanner";
import BlogGrids from "@/components/BlogGrids";
import checkLanguage from '@/miscs/checkLanguage';

const Blog = () => {
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
                <SmBanner/>
                <BlogGrids/>
            </Root>
        </motion.div>
    );
};
export default Blog;

// const queryString = `
// {
//     newsletters(sort: "createdAt:DESC", limit:3) {
//       Title
//       Thumb {url formats}
//       Content
//       Slug
//       createdAt
//     }
// }
// `;

// export async function getServerSideProps(ctx){

//     let data = await checkLanguage(queryString, ctx.req);
//     return {props: {news: data.data.newsletters}}

// }
