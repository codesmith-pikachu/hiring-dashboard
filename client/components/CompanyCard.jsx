import React from "react";
import {Flex, Heading, Text,  Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion} from "framer-motion";



function CompanyCard(){
	const format = useColorModeValue("gray.100", "gray.700");
    
	const MotionFlex = motion(Flex);

	return(
		<MotionFlex w="12rem" h="20rem" justifyContent="center" alignItems="center" 
			background={format} p={12} borderRadius={6} boxShadow="lg"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<Heading fontSize="1.5rem">Google</Heading>

		</MotionFlex>
	);
}

export default CompanyCard;
