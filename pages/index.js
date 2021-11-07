import Header from "../components/Header";
import {TextComponent} from "../components/TextComponent";
import Form from "../components/form"
import Head from "next/head";
import Carousel from "../components/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";


export default function Index() {
    return (
        <>
            <Head>
                <>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </>
            </Head>
            <Header/>
            <TextComponent/>
            <Carousel/>
            {/*<Form/>*/}
        </>
    )
}
