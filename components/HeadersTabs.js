import  React, {useState} from "react";
import { View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function HeaderTabs() {
    const[activeTab, setActiveTab] = useState("Agendamento");
    return(
        <View style={{flexDirection: "row", alignSelf:"center"}}>
            <HeaderButton 
            text="Agendamento" 
            btnColor="black" 
            textColor="white" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}/>
            <HeaderButton text="Serviços" 
            btnColor="white" 
            textColor="black"
            activeTab={activeTab} 
            setActiveTab={setActiveTab}/>
            
        </View>
    );

}


const HeaderButton = (props) => (

    <TouchableOpacity
    style={{
    backgroundColor: props.activeTab == props.text ? "black" : "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 40,
    }}
    onPress={() => props.setActiveTab(props.text)}
    >
<Text style={{color: props.activeTab == props.text ? "white" : "black", 
    fontSize: 15, 
    fontWeight: "900"}}
    >
    {props.text}</Text>
    </TouchableOpacity>
);