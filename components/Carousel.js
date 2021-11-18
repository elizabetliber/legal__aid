import React, {Component} from "react";
import Slider from "react-slick";
import {servicesOne} from "../pages/api/services";
import {servicesTwo} from "../pages/api/services";
import {servicesThree} from "../pages/api/services";
import {servicesFour} from "../pages/api/services";
import ProductCard from "./ProductCard";
import {Box, Text, Flex, Center} from "@chakra-ui/react";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#b7adad", height: "19px", width: "20px", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#b7adad", height: "19px", width: "20px", borderRadius: "50%"}}
            onClick={onClick}
        />
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
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />,
                    }
                },
                {
                    breakpoint: 889,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />,
                    }
                },
            ]
        };
        return (
            <Box
                ml={{base: "10px", sm: '22px', md: '60px', lg: "80px"}}
                mr={{base: "10px", sm: '22px', md: '60px', lg: "80px"}}
                pb={10}
                mb={5}
                id="services"
            >

                <Flex w="100%" justifyContent="center" alignItems="center">
                <Text
                    fontSize={{base: "24px", md: "22px", lg: "30px"}}
                    fontFamily={'body'}
                    fontWeight={500}
                    mt={6}
                    mb={8}
                    textAlign="center"
                    borderBottomWidth={3}
                    borderStyle={'solid'}
                    borderColor={"gray.300"}
                    width="180px"
                >
                    Наши услуги
                </Text>
                </Flex>
                <Center>
                <Box width={{base: "88%", sm: "97%", md: "94%", lg: "94%", xl: "94%", "2xl": "94%"}} marginLeft="1px">
                <Slider {...settings}>
                    {servicesOne.map((service, index) => {
                        return (
                            <div key={index}>
                                <ProductCard imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
                <Slider {...settings}>
                    {servicesTwo.map((service, index) => {
                        return (
                            <div key={index}>
                                <ProductCard imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
                <Slider {...settings}>
                    {servicesThree.map((service, index) => {
                        return (
                            <div key={index}>
                                <ProductCard imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
                <Slider {...settings}>
                    {servicesFour.map((service, index) => {
                        return (
                            <div key={index}>
                                <ProductCard imgSrc={service.image} title={service.title}/>
                            </div>
                        );
                    })}
                </Slider>
                </Box>
                </Center>
            </Box>
        );
    }
}

export default Carousel;
