import React from "react";
import {Flex, Heading, Text, VStack, Input, Button, useColorMode, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { motion} from "framer-motion";
import useFetch from "../hooks/useFetch.jsx";
function CompanyPage (){
	const MotionFlex = motion(Flex);
	return(
		<>
			<Flex direction="column" alignItems="center" justifyContent="center" h="100%"
				background="gray.200"
				borderRadius={6} p={3}>
				<Flex  direction="columnReverse" alignItems="center" justifyContent="center" h="5vh" w="60vw">
					<Flex fontSize="2rem" borderBottom="1px" borderColor="blackAlpha.300" w="100%" 
						justifyContent="center" alignItems="center" mb={3}>Title</Flex>
				</Flex>
				<MotionFlex h="4rem"  alignItems="center" justifyContent="center" width="90%" p={4} mb="auto"
					border="1px" borderColor="blackAlpha.400" borderRadius={3} 
					fontSize="4rem"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }} >
                        +
				</MotionFlex>
			</Flex>
		</>
	);
}

export default CompanyPage;