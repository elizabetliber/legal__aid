import {Flex, Heading, Img} from "@chakra-ui/react";
import ModalComponent from "./ModalComponent";
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// const breakpoints = createBreakpoints({
//     sm: "320px",
//     md: "550px",
//     lg: "960px",
//     xl: "1200px"
// })
//
// const theme = extendTheme({ breakpoints })
export function TextComponent() {
    return (
        <Flex height="100%" direction={{ base: "column", sm:"column", md: "row" }} alignItems="center" justifyContent="center" w="100%">
            <Flex direction="column"  justifyContent="space-between" alignItems={{base: "center", md: "flex-start"}} w={{base: "95%", md: "50%"}} mt={10} mb={15} mr={{base: 4, md: 5}} ml={{base: 4, md: 10}}>
            <Heading fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} fontFamily={'body'} fontWeight={500} >
                Качественное юридическое сопровождение для Вашего бизнеса.
            </Heading>
            <Heading  fontSize={{ base: "24px", md: "22px", lg: "30px" }} fontFamily={'body'} fontWeight={500} mt={5}>
                Решим Ваши правовые вопросы быстро и надежно.
                Начните с бесплатной консультации:
            </Heading>
            <ModalComponent />
            </Flex>
            <Flex alignItems="center" justifyContent="center" >
                <Img
                    boxSize={{ base: "350px", md: "425px"}}
                    src="./консультация.svg"
                    alt="Segun Adebayo"
                />
            </Flex>
        </Flex>
    )
}