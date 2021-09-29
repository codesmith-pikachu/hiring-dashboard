import React from "react";
import CompanyCard from "../components/CompanyCard.jsx";
import {Flex, Heading, Text,  Input, Button, useColorMode, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { motion} from "framer-motion";
function HomePage(){
	const MotionFlex = motion(Flex);
	return(
		<>  <SimpleGrid columns={2} gap={4}>
			<CompanyCard/>
			<MotionFlex w="12rem" h="20rem" justifyContent="center" alignItems="center" 
				background="gray.100" p={12} borderRadius={6} boxShadow="lg"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}>
				<Heading fontSize="2.8rem">+</Heading>

			</MotionFlex>
		</SimpleGrid>
		</>
	);
}

export default HomePage;