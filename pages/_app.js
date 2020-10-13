import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import TagManager from "react-gtm-module";
import Axios from "axios";

const base = "http://admin-mn.tavanbogdproperty.mn";

class MyApp extends App {
    state = {
        menu: {},
        information: {},
        config: {},
        completelyLoaded: false,
        serverUrl: "http://admin-mn.tavanbogdproperty.mn",
        frontUrl: "http://tavanbogdproperty.mn",
        name: "Tavan Bogd Property",
        description: `Манай компани Таван Богд Группийн 18 дахь охин компани ба барилга, бүтээн байгуулалтын салбарт олон улсын стандартад нийцсэн өндөр чанартай, шинэлэг архитектур төлөвлөлттэй, эрүүл аюулгүй орчинг бүрдүүлсэн "GERLUG VISTA" төслийг хэрэгжүүлж байна.`
    };
    async componentDidMount() {
        const res = await Axios.post('/api/base', {query: `query ${queryString}`})
        const config = {width: window.innerWidth, height: window.innerHeight, base};
        this.setState({ menu: res.data.data.menu, information: res.data.data.generalInfo, config, completelyLoaded: true})
        
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