/* eslint-disable react/prop-types */
import React, {useContext} from "react";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorMode,
	useColorModeValue,
	Stack,
	Switch,
	SimpleGrid, VStack, GridItem, colSpan,
	FormControl, FormLabel,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {Link as MenuLink} from "react-router-dom";
import { AppContext } from "./App.jsx";

// const Links = [<MenuLink to="/" key="dash">Dashboard</MenuLink>, "Feed", "Friends"];

// const NavLink = ({children}) => (
// 	<Link
// 		px={2}
// 		py={1}
// 		rounded={"md"}
// 		_hover={{
// 			textDecoration: "none",
// 			bg: useColorModeValue("gray.200", "gray.700"),
// 		}}
// 		href={"#"}>
// 		{children}
// 	</Link>
// );

function Nav() {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const {toggleColorMode} = useColorMode();
	const [state, dispatch] = useContext(AppContext);
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}  fontSize={16} borderBottom="1px" borderColor="blackAlpha.300">
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					
					<HStack spacing={8} alignItems={"center"}>
						{/* <Box>Logo</Box> */}
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								as={MenuLink} to="/">
								Dashboard
							</Link>
						</HStack>
					</HStack>
					<Flex alignItems={"center"}>
						{/* {avatar for account drop-down} */}
						<Menu>
							<Switch size="lg" mr={12} onChange={toggleColorMode} colorScheme="purple"/>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								minW={0}>
								<Avatar
									size={"md"}
									// src={
									// 	"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
									// }
								/>
							</MenuButton>
							<MenuList>
								{state && <MenuItem>Account Overview</MenuItem>}
								<MenuLink to="/login"><MenuItem>Sign in</MenuItem></MenuLink>
								<MenuLink to="/signup"><MenuItem>Sign up</MenuItem></MenuLink>
								{state && <MenuItem>Sign Out</MenuItem>}
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			</Box>

		</>
	);
}

export default Nav;