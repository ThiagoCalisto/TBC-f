import * as React from "react";
import { render } from "react-dom";
import {View, Text, SafeAreaView} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import GlobalStyle from "../components/GlobalStyle";
import HeaderTabs from "../components/HeadersTabs";

export default function Home() {
    return(

    <SafeAreaView style={GlobalStyle.AndroidSafeArea, {backgroundColor: "#eee", flex: 1}}>
        <View>
          <HeaderTabs/>
        </View>  
    </SafeAreaView>


    )
}