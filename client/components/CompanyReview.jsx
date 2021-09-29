import React from "react";
import {Flex, Heading, Text, VStack, Input, Button, useColorMode, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { motion} from "framer-motion";

function CompanyReview(){
	const MotionFlex = motion(Flex);
   
   
	return(
		<MotionFlex h="4rem"  alignItems="center" justifyContent="center" width="90%" p={4} mb="auto"
			border="1px" borderColor="blackAlpha.400" borderRadius={3} 
			fontSize="4rem"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }} >
                        +
		</MotionFlex>
	);
}


export default CompanyReview;