import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Услуги', 'Контакты', 'Отзывы'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('green.100', 'green.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={80} alignItems={'center'}>
                        <Box>Юридическая помощь</Box>
                        <HStack
                            as={'nav'}
                            spacing={7}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}