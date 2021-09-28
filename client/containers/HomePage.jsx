import React from "react";
import CompanyCard from "../components/CompanyCard.jsx";
import {Flex, Heading, Text,  Input, Button, useColorMode, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
function HomePage(){

	return(
		<>  <SimpleGrid columns={2} gap={4}>
			<CompanyCard/>
			<Flex w="12rem" h="16rem" justifyContent="center" alignItems="center" 
				background="gray.100" p={12} borderRadius={6} boxShadow="lg">
				<Heading fontSize="2.5rem">+</Heading>

			</Flex>
		</SimpleGrid>
		</>
	);
}

export default HomePage;