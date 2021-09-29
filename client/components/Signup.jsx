import React, {useEffect} from "react";
import {Flex, Heading, Input, Button, SimpleGrid, VStack, GridItem, colSpan,
	FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";
import useForm from "../hooks/useForm.jsx";

function Signup (){

	const [values, handleChange] = useForm({first_name: "", last_name:"", username: "", email:"",  password: ""});
	const format = useColorModeValue("gray.100", "gray.700");

	function poster(data) {
		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "Application/JSON",
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log("Error in poster:", err));
	}
	useEffect(()=>{
		console.log(values);
	},[values]);
	
	return(
		<>
			<Flex direction="column" alignItems="center" justifyContent="center"  
				background={format} h="100%" borderRadius={5} boxShadow="lg">
				<Flex direction="columnReverse" alignItems="center" justifyContent="center" h="5vh" w="60vw">
					<Heading mt={6}>Sign up</Heading>
				</Flex>
				<VStack h="50vh"  alignItems="center" justifyContent="center" width="70%" p={4} mb="auto">
					
					<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
						<GridItem colSpan={colSpan}>
							<FormControl>
								<FormLabel>First Name</FormLabel>
								<Input placeholder="Sir" name="first_name" onChange={handleChange}/>
							</FormControl>
						</GridItem>
						<GridItem colSpan={colSpan}>
							<FormControl>
								<FormLabel>Last Name</FormLabel>
								<Input placeholder="Cartier" name="last_name" onChange={handleChange}/>
							</FormControl>
						</GridItem>
						<GridItem colSpan={2}>
							<FormControl>
								<FormLabel>User Name</FormLabel>
								<Input placeholder="BBW" name="username" onChange={handleChange}/>
							</FormControl>
						</GridItem>
						<GridItem colSpan={2}>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input placeholder="email@email.com" name="email" onChange={handleChange}/>
							</FormControl>
						</GridItem>
						<GridItem colSpan={2}>
							<FormControl>
								<FormLabel>Password</FormLabel>
								<Input placeholder="***********" name="password" onChange={handleChange}/>
							</FormControl>
						</GridItem>
				
						<GridItem colSpan={2}>
						</GridItem>
						<GridItem colSpan={2}>
							<Button  size="lg" w="full" colorScheme="teal" onClick={()=> poster(values)}>
            Sign Up
							</Button>
						</GridItem>
					</SimpleGrid>
				</VStack>
			</Flex>
		</>
	);
}


export default Signup;