import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Categoria from "../components/Categoria";
import GlobalStyle from "../components/GlobalStyle";
import HeaderTabs from "../components/HeadersTabs";
import SearchBar from "../components/SearchBar";
import CarshopItem, { localServices } from "../components/CarshopItem";


const YELP_API_KEY = "";



export default function Home() {
  const [carshopData, setcarshopData] = React.useState(localServices);

  const getCarshopFromYelp = () => {
      const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=automotive&location=SanDiego";
    

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`
    }
  };

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setcarshopData(json.businesses));
  }


useEffect(() => {
getCarshopFromYelp();
}, []
)


      return(

      <SafeAreaView style={GlobalStyle.AndroidSafeArea, {backgroundColor: "#eee", flex: 1}}>
        <View style={{backgroundColor: "white", padding: 15}}>
          <HeaderTabs />
          <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categoria />
          <CarshopItem carshopData = {carshopData} />
        </ScrollView>  
    </SafeAreaView>
    )
}
