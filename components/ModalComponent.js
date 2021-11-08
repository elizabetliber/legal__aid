import React from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    useDisclosure,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter
} from "@chakra-ui/react";

export default function ModalComponent() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const initialRef = React.useRef()

    return (
        <>
            <Button onClick={onOpen} bg="teal.500"
                    color="white"
                    borderWidth={1}
                    borderStyle={'solid'}
                    borderColor={"blackAlpha.500"}
                    _hover={{bg: "teal.700", borderColor: "teal.700"}}
                    variant="outline"
                    width="190px"
                    pl={7}
                    pr={7}
                    pt={6}
                    pb={6}
                    mt={14}
            >
                КОНСУЛЬТАЦИЯ
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder="First name"/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder="Last name"/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>send
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}