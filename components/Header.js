import {MdBuild, MdCall, MdQueryBuilder} from "react-icons/md"
// import { useMediaQuery } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Link from "next/link"
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure,
    Img
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";


const Header = (props) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    // const [isSize, isDisplayingInBrowser] = useMediaQuery([
    //     "(min-width: 1060px)",
    //     "(display-mode: browser)",
    // ])
    // const breakpoints = createBreakpoints({
    //     xll: "1060px",
    // })
    // const theme = extendTheme({ breakpoints })

    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={3}
            bg="teal.500"
            color="white"
            {...props}
        >

            <Flex align="center" mr={5}>
                <Img src="/law-logo.svg" width={50} height={50} mr={2}/>
                <Heading as="h2" size="lg" letterSpacing={"tighter"}>
                    Юридическая помощь
                </Heading>
            </Flex>

            <Box display={{base: "block", md: "none"}} onClick={handleToggle}>
                <HamburgerIcon/>
            </Box>

            <Stack
                direction={{base: "column", md: "row"}}
                display={{base: isOpen ? "block" : "none", md: "flex"}}
                width={{base: "full", md: "auto"}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 1, lg: 1}}
                ml={2}
            >
                <Text letterSpacing={"0.1px"}>Услуги</Text>
                <Text letterSpacing={"0.1px"}>Контакты</Text>
                <Text letterSpacing={"0.1px"}>Отзывы</Text>
            </Stack>
                <Box
                    display={{base: isOpen ? "block" : "none", md: "block", lg: "flex"}}
                    mt={{base: 4, md: 0}}
                    height="100%"
                    alignItems={"center"}
                    // justifyContent={"flex-start"}
                    flexDirection={{lg: "row"}}
                >
                    <Box
                        display={{ sm: "none", md: "none", lg: 'flex' }}
                        alignItems={"center"}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        mr={10}
                        fontWeight={500}>
                        <MdQueryBuilder size={24}/>
                        <Text ml={1} mt={0.5}>ПН-ПТ 9:00 - 18:00</Text>
                    </Box>
                    <Link href="tel:+79095170050" textDecoration="none" >
                        <Button display={{md: "none", lg: "block"}} rightIcon={<MdCall/>}
                                variant="outline"
                                _hover={{bg: "teal.700", borderColor: "teal.700"}}>
                            +7-909-517-0050
                        </Button>
                    </Link>
                </Box>

        </Flex>
    );
};

export default Header;
