import * as React from "react";
import { render } from "react-dom";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Categoria from "../components/Categoria";
import GlobalStyle from "../components/GlobalStyle";
import HeaderTabs from "../components/HeadersTabs";
import SearchBar from "../components/SearchBar";
import RestaurantItem from "../components/RestaurantItem";



export default function Home() {
    return(

    <SafeAreaView style={GlobalStyle.AndroidSafeArea, {backgroundColor: "#eee", flex: 1}}>
        <View style={{backgroundColor: "white", padding: 15}}>
          <HeaderTabs />
          <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categoria />
          <RestaurantItem />
        </ScrollView>  
    </SafeAreaView>
    )
}