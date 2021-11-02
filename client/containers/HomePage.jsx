import React, {useEffect, useContext} from "react";
import CompanyCard from "../components/CompanyCard.jsx";
import {Flex, Heading, Text,  Input, Button, useColorMode, useColorModeValue, SimpleGrid, 
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton, useDisclosure, VStack, GridItem, colSpan,
	FormControl, FormLabel,} from "@chakra-ui/react";
import { motion} from "framer-motion";
import useForm from "../hooks/useForm.jsx";
import useFetch from "../hooks/useFetch.jsx";
import {AppContext} from "./App.jsx";
import {Link} from "react-router-dom";
function HomePage(){
	const { isOpen, onOpen, onClose } = useDisclosure();
	const format = useColorModeValue("gray.100", "gray.700");
	const MotionFlex = motion(Flex);
	const [values, handleChange] = useForm({name: "", url: ""});
	const [state, dispatch] = useContext(AppContext);

	function poster(data) {
		fetch("/company", {
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

	// useEffect(() => {
	// 	const loggedInUser = localStorage.getItem("user");
	// 	if (loggedInUser) {
	// 		const foundUser = JSON.parse(loggedInUser);
	// 		dispatch({ type:"LOGIN", payload: foundUser });
	// 	}
	// }, []);
	return(
		<>  <SimpleGrid columns={2} gap={4}>
			<Link to="/company"><CompanyCard/></Link>
			<MotionFlex w="12rem" h="20rem" justifyContent="center" alignItems="center" 
				background={format} p={12} borderRadius={6} boxShadow="lg"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }} 
				onClick={onOpen}
			>
				<Heading fontSize="2.8rem">+</Heading>

			</MotionFlex>
		</SimpleGrid>
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Company Info</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack h="50vh"  alignItems="center" justifyContent="center" width="70%" p={4} mb="auto">
					
						<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
							<GridItem colSpan={2}>
								<FormControl>
									<FormLabel>Company Name</FormLabel>
									<Input placeholder="VampKing" name="name" onChange={handleChange}/>
								</FormControl>
							</GridItem>
							<GridItem colSpan={2}>
								<FormControl>
									<FormLabel>Company Url</FormLabel>
									<Input placeholder="wexample" name="url" onChange={handleChange}/>
								</FormControl>
							</GridItem>
						</SimpleGrid>
					</VStack>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
					</Button>
					<Button colorScheme="purple" onClick={()=> poster(values)}>ADD</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
		</>
	);
}

export default HomePage;