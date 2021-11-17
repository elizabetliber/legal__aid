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
        <Center p={{sm: 1, md: 4, lg: 4}}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={3}
                overflow={'hidden'}>
                <Box
                    h={'190px'}
                    bg={'gray.100'}
                    mt={1}
                    mx={-6}
                    mb={7}
                    pos={'relative'}
                >
                    <Image
                        src={imgSrc}
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'lg'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    );
}