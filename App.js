import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyle from "./components/GlobalStyle";
import HeaderTabs from "./components/HeadersTabs";
import Home from "./screens/home";

export default function App() {
  return( 
  <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
  <Home />
  </SafeAreaView>
  );
}


