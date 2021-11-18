import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    useColorModeValue, Flex,
} from '@chakra-ui/react';
import {MdStarRate} from "react-icons/md";

export default function ProductCardTwo({imgSrc, title, text}) {
    return (
        <Center p={{base: 4, sm: 2, md: 2, lg: 3.5}}>
            <Box
                maxW={{base: "270px", sm: "255px", md: "255px", lg: "270px", xl: "270px", "2xl": "270px"}}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                borderWidth="2px"
                borderColor="gray.200"
                rounded="3xl"
                shadow="xl"
                p={{base: 7, sm: 7, md: 7, lg: 7, xl: 7, "2xl": 7}}
                textAlign={'center'}
            >
                <Flex flexDirection={"row"} justifyContent={"flex-start"} alignItems="center" mb={4}>
                    <Avatar
                        size={'md'}
                        src={imgSrc}
                        alt={'Avatar Alt'}
                        pos={'relative'}
                    />
                    <Flex flexDirection={"column"} justifyContent={"center"} ml={4} width="65px">
                        <Heading
                            fontSize={'md'}
                            fontWeight={"700"}
                            fontFamily={'body'}
                            pb={1}
                            borderBottomWidth={2}
                            borderStyle={'solid'}
                            borderColor={"gray.200"}
                        >
                            {title}
                        </Heading>
                        <Flex flexDirection={"row"} justifyContent={"flex-start"} alignItems="center">
                            <MdStarRate size={16} color={"yellow"}/>
                            <MdStarRate size={16} color={"yellow"}/>
                            <MdStarRate size={16} color={"yellow"}/>
                            <MdStarRate size={16} color={"yellow"}/>
                            <MdStarRate size={16} color={"yellow"}/>
                        </Flex>
                    </Flex>
                </Flex>
                <Text
                    textAlign={'left'}
                    color={useColorModeValue('gray.500', 'gray.400')}
                >
                    {text}
                </Text>
            </Box>
        </Center>
    );
}