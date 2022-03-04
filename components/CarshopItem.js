import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { parseComponentStack } from "react-native/Libraries/LogBox/Data/parseLogBoxLog";

export const localServices = [
   {
    name: "Troca de oleo",
    image_url:
        "https://www.oficinainteligente.com.br/blog/wp-content/uploads/2019/12/Blog_Como-aumentar-a-margem-de-lucro-e-o-fluxo-de-carros-na-troca-de-%C3%B3leo.png",
    categories: ["Assitencia", "Home Office"],
    price:"$",
    reviews: 1254,
    rating: 4.5,
   },
   {
    name: "Assitencia mecacnica",
    image_url:
        "https://oficinassp.com.br/wp-content/uploads/2016/10/especializada-bmw.jpeg",
    categories: ["Assitencia", "Home Office"],
    price:"$", 
    reviews: 1254,
    rating: 4.5,
   }

];



export default function CarshopItem() {
  return(
      <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30}}>
        {localServices.map((carShop, index) => (
    <View key={index}
     style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
        <CarshopImage image={carShop.image_url} />
        <CarshopIfo name={carShop.name} rating={carShop.rating}/>
    </View>
    ))}
    </TouchableOpacity>
  );
}

const CarshopImage = (props) => (
  <>
    <Image 
    source={{
        uri: props.image,
    }}
    style={{width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{position: "absolute", right:20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
    </TouchableOpacity>
</>
  )

  const CarshopIfo = (props) => (
    <View style={{flexDirection: "row",
     justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      }}>
       <View> 
        <Text style={{fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{fontSize: 13, color: "gray"}}>60min+</Text>
       </View>
      <View style ={{
        backgroundColor: "eee",
        height: 30,
        width: 30,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 15,
      }}>  
        <Text>{props.rating}</Text>
      </View>
    </View>

  );