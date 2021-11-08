import React, {Component} from "react";
import Slider from "react-slick";
import ProductCardTwo from "./ProductCardTwo";
import {Box, Heading, Text} from "@chakra-ui/react";
import {reviews} from "../pages/api/reviews";


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
            slidesToShow: 3,
            slidesToScroll: 3,
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
            ]
        };
        return (
            <Box
                ml={{sm: '5px', md: '10px', lg: "30px"}}
                mr={{sm: '5px', md: '10px', lg: "30px"}}
                borderTopWidth={1}
                borderBottomWidth={1}
                borderStyle={'solid'}
                borderColor={"gray.300"}
                pb={10}
                mb={5}
            >
                <Text
                    fontSize={{base: "24px", md: "22px", lg: "30px"}}
                    fontFamily={'body'}
                    fontWeight={500}
                    textAlign="center"
                    mt={6}
                    mb={3}
                >
                    Наши отзывы
                </Text>
                <Slider {...settings}>
                    {reviews.map((review, index) => {
                        return (
                            <div key={index} style={{marginTop: "25px"}}>
                                <ProductCardTwo imgSrc={review.img} title={review.title} text={review.text}/>
                            </div>
                        );
                    })}
                </Slider>
            </Box>
        );
    }
}

export default Carousel;
