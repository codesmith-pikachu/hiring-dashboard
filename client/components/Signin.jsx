/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import {Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import useForm from "../hooks/useForm.jsx";

function Signin (){

	const [values, handleChange] = useForm({username: "", password: ""});
	console.log(values);
    
	return(
		<Flex  height="100vh" alignItems="center" justifyContent="center">
			<Flex direction="column" justifyContent="center" alignItems="center"background="gray.100" p={12}
				rounded={6} boxShadow="lg" width="60vw" height="60vh">
				<Heading mb={6} >Login</Heading>
				<Input placeholder="User" variant="filled" mb={3} type="username" name="username" onChange={handleChange}/>
				<Input placeholder="*****" variant="filled" type="password" name="password"/>
				<Button mb={6} colorScheme="teal" alignSelf="stretch">Log in</Button>
				<Button >Color Mode</Button>
			</Flex>
		</Flex>

	);
}


export default Signin;