import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import {HomePage} from "./components/HomePage/HomePage";


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <ChakraProvider>
      <HomePage/>
    </ChakraProvider>
  );
}

export default App;
