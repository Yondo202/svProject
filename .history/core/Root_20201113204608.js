import Header from '@/core/Header'
import Footer from '@/core/Footer';
import PreSeo from "@/components/miscs/PreSeo";

export default function Root({children, seo}) {

    return (
        <Container>
            <PreSeo seo={seo}/>
            <Header/>
            {children}
            <Footer />
        </Container>
    )
}

const Container = styled.div `
    font-size: ${({theme})=>theme.fontSize};
`