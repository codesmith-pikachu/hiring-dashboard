import React from "react";
import {Flex, Heading, Input, Button, SimpleGrid, VStack, GridItem, colSpan,
	FormControl, FormLabel, Checkbox } from "@chakra-ui/react";
import useForm from "../hooks/useForm.jsx";

function Signup (){

	const [values, handleChange] = useForm({firstName: "", lastName:"", username: "", email:"",  password: ""});

	return(
		<VStack  height="100vh" alignItems="center" justifyContent="center" background="gray.100" width="70%" p={4}>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input placeholder="John" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input placeholder="Doe" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<FormLabel>Address</FormLabel>
						<Input placeholder="Blvd. Broken Dreams 21" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>City</FormLabel>
						<Input placeholder="San Francisco" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
				</GridItem>
				<GridItem colSpan={2}>
				</GridItem>
				<GridItem colSpan={2}>
					<Button variant="primary" size="lg" w="full">
            Place order
					</Button>
				</GridItem>
			</SimpleGrid>
		</VStack>

	);
}


export default Signup;