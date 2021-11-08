import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';

export default function ProductCardTwo({imgSrc ,title, text}) {
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'2xl'}
                    src={imgSrc}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {title}
                </Heading>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {text}
                </Text>
            </Box>
        </Center>
    );
}