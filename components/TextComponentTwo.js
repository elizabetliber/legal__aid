import {Flex, Heading, Link, Text} from "@chakra-ui/react";
import React from "react";


export function TextComponentTwo() {
    return (
        <Flex height="100%"
              direction="column"
              w="100%"
              borderBottomWidth={1}
              borderStyle={'solid'}
              borderColor={"gray.300"}>
            <Text
                fontSize={{base: "24px", md: "22px", lg: "30px"}}
                fontFamily={'body'}
                fontWeight={500}
                textAlign="center"
                mt={3}
                mb={3}
            >
                Наши контакты
            </Text>
            <Flex direction="column"  justifyContent="space-between" alignItems={{base: "center", md: "flex-start"}} w="95%" mt={10} mb={15} mr={{base: 4, md: 5}} ml={{base: 4, md: 10}}>
                <Heading fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} fontFamily={'body'} fontWeight={500} >
                    Остались вопросы?<br/>
                    Не нашли свою проблему?
                </Heading>
                <Heading fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} fontFamily={'body'} fontWeight={500} >
                    Получите консультацию юриста прямо сейчас!
                </Heading>
                <Heading  fontSize={{ base: "24px", md: "22px", lg: "30px" }} fontFamily={'body'} fontWeight={500} mt={5}>
                    Задайте свой вопрос через любой мессенджер<br/> или по телефону:<br/>
                    <Link href="tel:+79095170050">+7-909-517-0050</Link>
                </Heading>
            </Flex>
        </Flex>
    )
}