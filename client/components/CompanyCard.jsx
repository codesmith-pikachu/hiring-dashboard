import React from "react";
import {Flex, Heading, Text,  Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

function CompanyCard(){

	return(
		<Flex w="12rem" h="16rem" justifyContent="center" alignItems="center" 
			background="gray.100" p={12} borderRadius={6} boxShadow="lg">
			<Heading fontSize="1.5rem">Google</Heading>

		</Flex>
	);
}

export default CompanyCard;
