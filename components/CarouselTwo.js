import React, {Component} from "react";
import Slider from "react-slick";
import ProductCardTwo from "./ProductCardTwo";
import {Box, Center, Flex, Text} from "@chakra-ui/react";
import {reviews} from "../pages/api/reviews";


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
            prevArrow: <SamplePrevArrow/>,
            nextArrow: <SampleNextArrow/>,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />,
                    }
                },
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: true,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />,
                    }
                },
            ]
        };
        return (
            <Center >
            <Box
                ml={{base: "10px", sm: '80px', md: '100px', lg: "100px"}}
                mr={{base: "10px", sm: '80px', md: '100px', lg: "100px"}}
                pb={15}
                mb={5}
                id="reviews"
                width={{base: "82%", sm: "82%", md: "82%", lg: "82%", xl: "94%", "2xl": "94%"}}
            >
                <Flex w="100%" justifyContent="center" alignItems="center">
                <Text
                    fontSize={{base: "24px", md: "22px", lg: "30px"}}
                    fontFamily={'body'}
                    fontWeight={500}
                    textAlign="center"
                    mt={5}
                    mb={8}
                    borderBottomWidth={3}
                    borderStyle={'solid'}
                    borderColor={"gray.300"}
                    width="200px"
                >
                    Наши отзывы
                </Text>
                </Flex>
                <Slider {...settings}>
                    {reviews.map((review, index) => {
                        return (
                            <div key={index} style={{marginTop: "5px"}}>
                                <ProductCardTwo imgSrc={review.img} title={review.title} text={review.text}/>
                            </div>
                        );
                    })}
                </Slider>
            </Box>
            </Center>
        );
    }
}

export default Carousel;
