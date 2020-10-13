import "@/core/suneditor.scss";
import "@/core/styles.scss";
import "@/core/mobile.scss";
import "@/core/awesome-slider.scss";
import Header from '@/core/Header'
import Footer from '@/core/Footer';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import { useContext } from "react";

export default function Root(props) {
    const {menu} = useContext(MenuContext);
    return (
        <div className="Layout">
            <Header links={menu ? menu.Menu : []}/>
            {props.children}
            {props.noFooter ? null : <Footer /> }
        </div>
    )
}