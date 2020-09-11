import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import checkLanguage from "@/miscs/checkLanguage";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import TagManager from "react-gtm-module";

const queryString = `
{
    menu {
      Menu {
        Title
        Path
        Submenu {
          Title
          Path
        }
      }
    }
    generalInfo {
        CompanyName
        Phone
        Location
        Email
        Facebook
        Twitter
        Youtube
        Instagram
        FooterLinks {
          Title Path
        }
        Logo {
            url
        }
        Logo2 {
            url
          }
        Map {
            Latitude Longtitude Zoom
        }
        GoogleTagManagerID
    }
}`;

class MyApp extends App {
    state = {
        menu: {},
        information: {}
    };
    async componentDidMount() {
        let data = await checkLanguage(queryString, null);
        this.setState({ menu: data.data.menu, information: data.data.generalInfo });
        
        // GOOGLE TAG MANAGER
        const tagManagerArgs = {
            gtmId: data.data.generalInfo.GoogleTagManagerID,
        };
        TagManager.initialize(tagManagerArgs);

        // INJECTING SCRIPTS
        // const script = document.createElement("script");
        // script.src = require("../core/gt");
        // script.async = true;
        // document.body.appendChild(script);
    }
    // componentWillUnmount() {
    //     document.body.removeChild(script);
    // }

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
