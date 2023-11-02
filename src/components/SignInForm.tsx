import { Text, Button, Input, Divider, VStack, HStack, InputGroup, InputRightElement, Center, AbsoluteCenter, Flex } from "@chakra-ui/react";
import CompoundLogo from "./Logo";
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm(): JSX.Element {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Flex
            width="100vw"
            height="75vh"
            alignItems="center"
            justifyContent="center"
        >
        <Center>
            <VStack spacing='24px'>
                <CompoundLogo></CompoundLogo>
                <Input variant='outline' placeholder='Email'></Input>
                <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
            </InputGroup>
                <Button> Login </Button>
                <Divider  borderWidth={'2px'} orientation="horizontal"></Divider>
                <Text textColor={'black'}>Or Log In With One Of: </Text>
                <HStack spacing='10px'>
                    {/* Providers Here */}
                    <Button w={'full'} leftIcon={<FcGoogle />} onClick={() => signIn("google")}>Google</Button>
                    <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>Facebook</Button>
                    <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>LinkedIn</Button>
                </HStack>
                <Divider borderWidth={'2px'} orientation="horizontal"></Divider>
                <Button>Sign Up</Button>
            </VStack>
    </Center>
    </Flex>)
  }