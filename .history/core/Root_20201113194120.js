import Header from '@/core/Header'
import Footer from '@/core/Footer';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import { useContext } from "react";
import PreSeo from "@/components/miscs/PreSeo";

export default function Root({children, noFooter, seo}) {

    const {menu} = useContext(MenuContext);
    
    return (
        <div className="Layout">
            <PreSeo seo={seo}/>
            <Header links={menu ? menu.Menu : []}/>
            {children}
            {noFooter ? null : <Footer /> }
        </div>
    )
}