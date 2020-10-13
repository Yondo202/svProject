import React from "react";
import { motion } from "framer-motion";
import Root from "@/core/Root";
import SmBanner from "@/components/SmBanner";
import BlogGrids from "@/components/BlogGrids";

const Blog = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Root>
                <SmBanner/>
                <BlogGrids/>
            </Root>
        </motion.div>
    );
};
export default Blog;