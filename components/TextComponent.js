import {Flex, Heading, Img} from "@chakra-ui/react";
import ModalComponent from "./ModalComponent";

export function TextComponent() {
    return (
        <Flex height="55vh" direction="row" width="100%">
            <Flex direction="column" >
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} width="50%">
                Качественное юридическое сопровождение для Вашего бизнеса.
            </Heading>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} width="50%">
                Решим Ваши правовые вопросы быстро и надежно.
                Начните с бесплатной консультации:
            </Heading>
            <ModalComponent/>
            </Flex>
            <Flex>
                <Img
                    borderRadius="full"
                    boxSize="500px"
                    src="./консультация.svg"
                    alt="Segun Adebayo"
                />
            </Flex>
        </Flex>
    )
}