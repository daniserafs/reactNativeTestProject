import React from "react";
import HelloWorld from "./src/HelloWorld"; // using default in the file HelloWorld.js you don't need curly braces for importing
import { Home } from "./src/pages/Home"; // without default in the file Home.js you need curly braces for importing
import { StatusBar } from "react-native";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  
  );
}