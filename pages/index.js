import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import ResolveComponent from "@/components/dynamic/ResolveComponent"
import checkLanguage from "@/components/miscs/checkLanguage";

const Index = ({data}) => {
    let {Layout} = data
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Head>
                <title>Tavan Bogd Properties</title>
                <meta name="description" content="To be continued..." />
            </Head>
            <Root noFooter>
                <ResolveComponent data={Layout}/>
            </Root>
        </motion.div>
    );
    
};
export default Index;

export async function getServerSideProps({params, req}){
    let res = await checkLanguage('/home', req, true);
    return {props: {data: res.data}}
}