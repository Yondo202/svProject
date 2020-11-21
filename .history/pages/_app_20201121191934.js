import React from "react";
import Head from "next/head";
import App from "next/app";
import '../style/style.scss'
import { AnimatePresence } from "framer-motion";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import checkLanguage from "@/components/miscs/checkLanguage";

const base = "http://localhost:1337";

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
         
        </Head>
        <Component {...pageProps} />
      </>
    );
  }



// class MyApp extends App {
//     state = {
//         menu: [],
//         completelyLoaded: false,
//     };
//     // async componentDidMount() {
//     //     let res = await checkLanguage(queryString, null);
//     //     this.setState({ completelyLoaded: true, menu: res.data.menu.Main});
//     // }

//     render() {
//         const { Component, pageProps, router } = this.props;

//         return (
           

         
//             // <ThemeProvider theme={theme}>
//             //     <MenuProvider value={this.state}>
//             //         <AnimatePresence exitBeforeEnter>
//             //             <Component {...pageProps} key={router.route} />
//             //         </AnimatePresence>
//             //     </MenuProvider>
//             // </ThemeProvider>
//         );
//     }
// }

// export default MyApp;

// const queryString = ``

// // const queryString = `
// // {
// // menu {
// //     Main {
// //     Title Slug Page {
// //         Slug
// //         }
// //         }
// //     }
// // }`;