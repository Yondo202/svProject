import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render(){
        return(
            <Html lang="mn">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/> 
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                    <link rel="shortcut icon" href="/img/logo.png" />
                    <script src="https://kit.fontawesome.com/b3b6e1d98c.js" crossOrigin="anonymous"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Ruda&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument