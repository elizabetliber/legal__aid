import {Box, Flex, Heading, Link, Text} from "@chakra-ui/react";
import React from "react";
import {MdQueryBuilder, MdHouse, MdCall} from "react-icons/md";


export function TextComponentTwo() {
    return (
        <Flex
            height="100%"
            direction="column"
            w="100%"
            justifyContent="center"
            pb={10}
            alignItems="center"
            id="contacts"
        >
            <Text
                fontSize={{base: "24px", md: "22px", lg: "30px"}}
                fontFamily={'body'}
                fontWeight={500}
                textAlign="center"
                mt={3}
                mb={3}
                width="220px"
                borderBottomWidth={3}
                borderStyle={'solid'}
                borderColor={"gray.300"}
            >
                Наши контакты
            </Text>
            <Flex direction="column" justifyContent="center" alignItems={{base: "center", md: "center"}} w="100%"
                  mt={5}>
                <Box
                    display={{base: 'flex', sm: 'flex', md: 'flex', lg: 'flex'}}
                    alignItems={"center"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    width={"170px"}
                    fontWeight={500}
                >
                    <MdHouse size={25}/>
                    <Text ml={1} mt={0.5} fontSize={18}>г. Новосибирск</Text>
                </Box>
                <Box
                    display={{base: 'flex', sm: 'flex', md: 'flex', lg: 'flex'}}
                    alignItems={"center"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    width={"180px"}
                    mt={5}
                    fontWeight={500}>
                    <MdCall size={25}/>
                    <Text ml={1} mt={0.5} fontSize={18}>+7-909-517-0050</Text>
                </Box>
                <Box
                    display={{base: 'flex', sm: 'flex', md: 'flex', lg: 'flex'}}
                    alignItems={"flex-start"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    width={"200px"}
                    mt={5}
                    fontWeight={500}>
                    <MdQueryBuilder size={25}/>
                    <Text ml={1} mt={0.5} fontSize={18}>
                        ПН-ПТ: 9:00 - 18:00<br/>
                        СБ-ВС: выходной
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}