import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import SmBanner from "@/components/SmBanner";
import BlogGrids from "@/components/BlogGrids";
import checkLanguage from '@/miscs/checkLanguage';
import BlogDetail from '@/components/BlogDetail';

const Blog = ({news, other}) => {
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
                <BlogDetail data={news} other={other}/>
            </Root>
        </motion.div>
    );
};
export default Blog;

export async function getServerSideProps({params, req}){

    const queryString = `
    {
        newsletters(limit: 6) {
          Title
          Thumb {url formats}
          Content
          Slug
          createdAt
        }
    }
    `;

    let data = await checkLanguage(`/newsletters?Slug=${params.id}`, req, true);
    let other = await checkLanguage(queryString, req);
    return {props: {news: data.data[0], other: other.data.newsletters}}

}
