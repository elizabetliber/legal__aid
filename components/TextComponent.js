import {Flex, Heading, Img} from "@chakra-ui/react";
import ModalComponent from "./ModalComponent";


export function TextComponent() {
    return (
        <Flex
            height="100%"
            direction={{ base: "column", sm:"column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            w="100%"

        >
            <Flex
                  direction="column"
                  justifyContent="space-between"
                  alignItems={{base: "center", sm: "center", md: "flex-start"}}
                  w={{base: "95%", md: "50%"}}
                  mt={{base: 8, sm: 8, md: 2, lg: 2}}
                  mb={15}
                  mr={{base: 2, md: 5}}
                  ml={{base: 2, md: 5}}
            >
            <Heading
                textAlign={{base: 'center', sm: 'center', md: "left",}}
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontFamily={'body'}
                fontWeight={500}
            >
                Качественное юридическое сопровождение для Вашего бизнеса.
            </Heading>
            <Heading
                textAlign={{ base: 'center', sm: 'center', md: "left",}}
                fontSize={{ base: "22px", md: "22px", lg: "29px" }}
                fontFamily={'body'}
                fontWeight={500}
                mt={8}
            >
                Решим Ваши правовые вопросы быстро и надежно.
                Начните с бесплатной консультации:
            </Heading>
            <ModalComponent />
            </Flex>
            <Flex
                display={{base: "none", sm: "none", md: "flex", lg: "flex"}}
                alignItems="center"
                justifyContent="center"
                mr={{base: 2, md: 1}}
                ml={{base: 2, md: 5}}
            >
                <Img
                    boxSize={{ base: "350px", md: "425px"}}
                    src="./консультация.svg"
                    alt="Segun Adebayo"
                />
            </Flex>
        </Flex>
    )
}