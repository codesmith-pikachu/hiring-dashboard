/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {useEffect} from "react";
import {Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import useForm from "../hooks/useForm.jsx";

function Signin (){
	const format = useColorModeValue("gray.200", "gray.700");
	const [values, handleChange] = useForm({username: "", password: ""});
	function login(data) {
		fetch("/signup", {
			method: "GET",
			headers: {
				"Content-Type": "Application/JSON",
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log("Error in login:", err));
	}
	
	useEffect(()=>{
		console.log(values);
	},[values]);
    
	return(
		<Flex  height="100%" alignItems="center" justifyContent="center">
			<Flex direction="column" justifyContent="center" alignItems="center"background={format} p={12}
				rounded={6} boxShadow="lg" width="60vw" height="60vh">
				<Heading mb={6} >Login</Heading>
				<Input placeholder="User" variant="filled" mb={3} type="username" name="username" onChange={handleChange} w="50%"/>
				<Input placeholder="*****" variant="filled" type="password" name="password" w="50%" mb={3} onChange={handleChange}/>
				<Button mb={6} colorScheme="teal"  h="6rem" width="50%" 
					fontSize="3rem" onClick={()=> login(values)}>Log in</Button>
			</Flex>
		</Flex>

	);
}


export default Signin;