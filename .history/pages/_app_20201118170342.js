import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import checkLanguage from "@/components/miscs/checkLanguage";

const base = "http://localhost:1337";

class MyApp extends App {
    state = {
        menu: [],
        completelyLoaded: false,
    };
    async componentDidMount() {
        let res = await checkLanguage(queryString, null);
        this.setState({ completelyLoaded: true, menu: res.data.menu.Main});
    }

    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <MenuProvider value={this.state}>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </MenuProvider>
            </ThemeProvider>
        );
    }
}

export default MyApp;

// const queryString = `
// {
// menu {
//     Main {
//     Title Slug Page {
//         Slug
//         }
//         }
//     }
// }`;