import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

export default function ProductCard({imgSrc, title}) {
    return (
        <Center p={{base: 4, sm: 4, md: 3.5, lg: 3.5}}>
            <Box
                maxW={{base: "270px", sm: "255px", md: "270px", lg: "270px", xl: "270px", "2xl": "270px"}}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                borderWidth="1px"
                borderColor="gray.200"
                rounded="lg"
                shadow="lg"
                p={3}
                overflow={'hidden'}>
                <Box
                    h={{base: "180px", sm: "170px", md: "190px", lg: "190px", xl: "190px", "2xl": "190px"}}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    pos={'relative'}
                >
                    <Image
                        src={imgSrc}
                        layout={'fill'}
                    />
                </Box>
                <Stack pb={1.5} pt={3.5} textAlign={"center"}>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={"17px"}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    );
}