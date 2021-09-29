import React, {createContext, useReducer} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
import HomePage from "../containers/HomePage.jsx";
import Nav from "../containers/Nav.jsx";
import CompanyPage from "../containers/CompanyPage.jsx";

const appReducer = (state, action) => {
	switch (action.type) {
	case "LOG_OUT":
		return null;
	case "LOGIN":
		return action.payload;
	default:
		return state;
	}
};
export const AppContext = createContext();

const App = () =>{
	
	const format = useColorModeValue("gray.100", "gray.700");
	const format2 = useColorModeValue("teal", "purple.200");


	const [state, dispatch] = useReducer(appReducer, null);

	return (
		<Router>
			<AppContext.Provider value={[state, dispatch]}>
				<Nav />
				<Switch>
					<Flex background={format} justifyContent="center" alignItems="center" p={6}>
						<Flex p={6} background={format2} minH="88vh" width="80%" justifyContent="center"
							alignItems="center" borderRadius={12}>
							<Route exact path='/'>
								<HomePage />
							</Route>
				
							<Route exact path='/login'>
								<Signin />
							</Route>
							<Route exact path='/signup'>
								<Signup />
							</Route>
							<Route exact path='/comp'>
								<CompanyPage />
							</Route>
						</Flex>
					</Flex>
				</Switch>
			</AppContext.Provider>
		</Router>
	);

}; 

export default App;