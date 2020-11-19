import Header from '@/core/Header'
import Footer from '@/core/Footer';
import PreSeo from "@/components/miscs/PreSeo";

export default function Root({children, seo}) {

    return (
        <div className="Layout">
            <PreSeo seo={seo}/>
            <Header/>
            {children}
            <Footer />
        </div>
    )
}