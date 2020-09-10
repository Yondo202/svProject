import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import styled from "styled-components";
import H1 from "@/components/shared/H1";
import TopLand from "@/components/Topland";

const Profile = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Head>
                <title>Bogd Motors LLC</title>
                <meta name="description" content="To be continued..." />
            </Head>
            <Root>
                <TopLand/>
            </Root>
        </motion.div>
    );
};

export default Profile;
