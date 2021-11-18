import Header from "../components/Header";
import {TextComponent} from "../components/TextComponent";
import Head from "next/head";
import Carousel from "../components/Carousel";
import {TextComponentTwo} from "../components/TextComponentTwo";
import CarouselTwo from "../components/CarouselTwo";
import {Center, Flex} from "@chakra-ui/react";

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
            <CarouselTwo/>
            <TextComponentTwo/>
        </>
    )
}
