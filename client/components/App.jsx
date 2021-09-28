import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
const App = () =>{
	const {toggleColorMode} = useColorMode();
	const format = useColorModeValue("gray.100", "gray.700");

	return (
		<Router>
			<Switch>
				<Route exact path='/login'>
					<Signin />
				</Route>
				<Route exact path='/'>
					<Signup />
				</Route>
			</Switch>
		</Router>
	);

}; 

export default App;