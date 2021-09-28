import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

import "./styles/styles.css";

render(
	<ChakraProvider>
		<App />
	</ChakraProvider>
	,
	document.getElementById("root")
);
