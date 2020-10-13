import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import TagManager from "react-gtm-module";
import Axios from "axios";

class MyApp extends App {
    state = {
        menu: {},
        information: {},
        config: {},
    };
    async componentDidMount() {
        const res = await Axios.post('/api/base', {query: `query ${queryString}`})
        const config = {width: window.innerWidth, height: window.innerHeight};
        this.setState({ menu: res.data.data.menu, information: res.data.data.generalInfo, config })
        
        // GOOGLE TAG MANAGER
        const tagManagerArgs = { gtmId: res.data.data.generalInfo.GoogleTagManagerID };
        TagManager.initialize(tagManagerArgs);
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
        Phone PhoneCaption PhoneIcon {url formats}
        Location LocationCaption LocationIcon {url formats}
        Email EmailCaption EmailIcon {url formats}
        Facebook
        Twitter
        Youtube
        Instagram
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