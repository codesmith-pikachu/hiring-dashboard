import React from "react";
import {Flex, Heading, Text,  Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion} from "framer-motion";



function CompanyCard(){
    
	const MotionFlex = motion(Flex);

	return(
		<MotionFlex w="12rem" h="20rem" justifyContent="center" alignItems="center" 
			background="gray.100" p={12} borderRadius={6} boxShadow="lg"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}>
			<Heading fontSize="1.5rem">Google</Heading>

		</MotionFlex>
	);
}

export default CompanyCard;
