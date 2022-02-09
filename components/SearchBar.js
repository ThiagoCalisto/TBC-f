import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Iconicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: "row"}}>
          <GooglePlacesAutocomplete 
          placeholder="Pesquisar"
          styles={{
              textInput: {
                  backgroundColor: "#eee",
                  borderRadius: 20,
                  fontWeight: "700",
                  marginTop: 7,
              },    
              textInputContainer:{
                  backgroundColor: "#eee",
                  borderRadius: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 3,
              },
          }}

          renderLeftButton={() =>(
            <View style={{ marginLeft: 13 }}>
                <Iconicons name='location' size={24}></Iconicons>
                </View>
          )}
          renderRightButton={() =>(
            <View
                style={
                    {
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "white",
                        padding: 9,
                        borderRadius:10,
                        alignItems: "center",
                    }
                }
                >
                    <AntDesign name="clockcircle" size={11} style={{ marginRight: 6}}/>
                <Text>Pesquisar</Text>
                </View>

          )}
          />
        </View>
    )
}