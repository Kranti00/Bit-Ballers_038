import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";
import AllRoutes from "../../Pages/AllRoutes";

export function HomePage() {
  return (
    <ChakraProvider>
      <Navbar />
      <AllRoutes />
      <Footer />
    </ChakraProvider>
  );
}
