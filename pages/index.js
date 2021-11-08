import Header from "../components/Header";
import {TextComponent} from "../components/TextComponent";
import Form from "../components/form"
import Head from "next/head";
import Carousel from "../components/Carousel";
import {TextComponentTwo} from "../components/TextComponentTwo";
import CarouselTwo from "../components/CarouselTwo";
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
                </>
            </Head>
            <Header/>
            <TextComponent/>
            <Carousel/>
            <TextComponentTwo/>
            <CarouselTwo/>
            <Form/>
        </>
    )
}
