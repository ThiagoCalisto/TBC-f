import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const items  = [ 
{
    image: require("../assets/images/shopping-bag.png"),
    text: "mudar",
},
{
    image: require("../assets/images/bread.png"),
    text: "mudar",
},
{
    image: require("../assets/images/fast-food.png"),
    text: "mudar",
},
{
    image: require("../assets/images/deals.png"),
    text: "mudar",
},
{
    image: require("../assets/images/coffee.png"),
    text: "mudar",
},
{
    image: require("../assets/images/soft-drink.png"),
    text: "mudar",
},
{
    image: require("../assets/images/desserts.png"),
    text: "mudar",
},
];




export default function Categoria(){
    return(
         <View style={{
             marginTop: 5,
             backgroundColor: "#fff",
             paddingVertical: 10,
             paddingLeft: 20,
         }}
         >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* loop starts here */}
            {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30}}>  
            <Image 
            source={item.image} 
            style={{
                width:50,
                height:40,
                resizeMode: 'contain',
            }}
            ></Image>
            <Text style={{ fontSize: 13, fontWeight: 'bold'}}>{item.text}</Text>
          </View>
          ))}
        </ScrollView>
        </View>
    );
}