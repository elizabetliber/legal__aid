import React,  { useState } from 'react';
import axios from 'axios';
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
    ModalFooter, Textarea
} from "@chakra-ui/react";

export default function ModalComponent() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const initialRef = React.useRef()


    async function sendForm() {

        try {
            await axios.post('http://localhost:3000/api/contact', {
                name, phone, email, message
            });

            setName('');
            setPhone('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.log('Sending error', error);
        }

    }

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <>
            <Button
                onClick={onOpen} bg="teal.500"
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
                mt={12}
            >
                КОНСУЛЬТАЦИЯ
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent mt={20} mr={1.5} ml={1.5}>
                    <ModalHeader color="white" bg="teal.400" >Форма обратной связи</ModalHeader>
                    <ModalCloseButton mt={2} color="white"/>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel >ФИО</FormLabel>
                            <Input ref={initialRef} placeholder="ФИО" borderColor="teal.500" value={name} onChange={event => setName(event.target.value)}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Номер телефона</FormLabel>
                            <Input placeholder="Номер телефона" borderColor="teal.500" value={phone} onChange={event => setPhone(event.target.value)}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>E-mail</FormLabel>
                            <Input placeholder="e-mail" borderColor="teal.500" value={email} onChange={event => setEmail(event.target.value)}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Сообщение</FormLabel>
                            <Textarea placeholder="Сообщение" borderColor="teal.500" value={message} onChange={event => setMessage(event.target.value)}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button bg="teal.400" color="white" type='button' mr={3} onClick={sendForm}>Отправить
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}