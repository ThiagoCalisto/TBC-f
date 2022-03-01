import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";


export default function RestaurantItem() {
  return(
    <View>
        <RestaurantImage />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image 
    source={{
        uri: "http://blog.armazemautopecas.com.br/wp-content/uploads/2018/09/post-25.png"
    }}
    style={{width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{position: "absolute", right:20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
    </TouchableOpacity>
</>
  )