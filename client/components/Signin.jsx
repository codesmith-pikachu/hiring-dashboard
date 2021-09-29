/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {useEffect, useContext} from "react";
import {Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import useForm from "../hooks/useForm.jsx";
import {AppContext} from "../containers/App.jsx";
function Signin (){
	const format = useColorModeValue("gray.200", "gray.700");
	const [values, handleChange] = useForm({username: "", password: ""});
	const [state, dispatch] = useContext(AppContext);

	function login(data) {
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "Application/JSON",
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((data) => {
				dispatch({ type:"LOGIN", payload: data });
				localStorage.setItem("user", data);
				console.log(data);
			})
			.catch((err) => console.log("Error in login:", err));
	}

	// function poster(data) {
	// 	fetch(`/login?email=${data.email}&password=${data.password}`)
	// 		.then(data => data.json())
	// 		.then(res => console.log(res))
	// 		.catch(err => console.log("Login error:", err));
	// }
	
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