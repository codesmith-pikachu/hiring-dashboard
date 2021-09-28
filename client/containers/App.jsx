import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
import HomePage from "../containers/HomePage.jsx";
import Nav from "../containers/Nav.jsx";
const App = () =>{
	const {toggleColorMode} = useColorMode();
	const format = useColorModeValue("gray.100", "gray.700");

	return (
		<Router>
			<Nav />
			
			<Switch>
				<Flex p={6} background="teal" minH="88vh" width="100%" justifyContent="center" alignItems="center">
					<Route exact path='/'>
						<HomePage />
					</Route>
				
					<Route exact path='/login'>
						<Signin />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
				</Flex>
			</Switch>
		</Router>
	);

}; 

export default App;