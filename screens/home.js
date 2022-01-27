import * as React from "react";
import { render } from "react-dom";
import {View, Text, SafeAreaView} from "react-native";
import GlobalStyle from "../components/GlobalStyle";
import HeaderTabs from "../components/HeadersTabs";

export default function Home() {
    return(

    <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
          <HeaderTabs/>
        </SafeAreaView>


    )
}