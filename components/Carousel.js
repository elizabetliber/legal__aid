import React, {Component} from "react";
import Slider from "react-slick";
import {servicesOne} from "../pages/api/services";
import {servicesTwo} from "../pages/api/services";
import {servicesThree} from "../pages/api/services";
import {servicesFour} from "../pages/api/services";
import ProductCardTwo from "./ProductCardTwo";
import {Box} from "@chakra-ui/react";


function SampleNextArrow() {
    return (
        <>
            <button className="slide-arrow prev-arrow"></button>
        </>
    );
}

function SamplePrevArrow() {
    return (
        <>
            <button className="slide-arrow next-arrow"></button>
        </>
    );
}

class Carousel extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            prevArrow: <SamplePrevArrow/>,
            nextArrow: <SampleNextArrow/>,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                // {
                //     breakpoint: 370,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1
                //     }
                // }
            ]
        };
        return (
            <Box ml={{ md: '10px', lg: "30px" }} mr={{md: '10px', lg: "30px" }}>
                <Slider {...settings}>
                    {servicesOne.map((service, index) => {
                        return (
                            <div key={index} style={{marginTop: "25px"}}>
                                <ProductCardTwo imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
                <Slider {...settings}>
                    {servicesTwo.map((service, index) => {
                        return (
                            <div key={index}>
                                <ProductCardTwo imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
                <Slider {...settings}>
                    {servicesThree.map((service, index) => {
                        return (
                            <div key={index}>
                                <ProductCardTwo imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
                <Slider {...settings}>
                    {servicesFour.map((service, index) => {
                        return (
                            <div key={index}>
                                <ProductCardTwo imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
            </Box>
        );
    }
}

export default Carousel;
