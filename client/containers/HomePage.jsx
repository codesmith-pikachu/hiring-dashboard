import React from "react";
import CompanyCard from "../components/CompanyCard.jsx";
import {Flex, Heading, Text,  Input, Button, useColorMode, useColorModeValue, SimpleGrid, 
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton, useDisclosure} from "@chakra-ui/react";
import { motion} from "framer-motion";
function HomePage(){
	const { isOpen, onOpen, onClose } = useDisclosure();
	const format = useColorModeValue("gray.100", "gray.700");
	const MotionFlex = motion(Flex);
	return(
		<>  <SimpleGrid columns={2} gap={4}>
			<CompanyCard/>
			<MotionFlex w="12rem" h="20rem" justifyContent="center" alignItems="center" 
				background={format} p={12} borderRadius={6} boxShadow="lg"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }} 
				onClick={onOpen}>
				<Heading fontSize="2.8rem">+</Heading>

			</MotionFlex>
		</SimpleGrid>
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Company Info</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
               
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
					</Button>
					<Button variant="ghost">Secondary Action</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
		</>
	);
}

export default HomePage;