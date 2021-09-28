import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import Signin from './Signin';
const App = () =>{
  const {toggleColorMode} = useColorMode();
  const format = useColorModeValue('gray.100', 'gray.700');

return (
  <Router>
  <Switch>
  <Route exact path='/'>
            <HomePage />
          </Route>
  </Switch>
  </Router>
);

} 

export default App;