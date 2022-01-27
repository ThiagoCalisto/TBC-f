import * as React from "react";
import { View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function HeaderTabs() {
    return(
        <View style={{flexDirection: "row", alignSelf:"center"}}>
            <HeaderButton text="Agendamento" btnColor="black" textColor="white"/>
            <HeaderButton text="Serviços" btnColor="white" textColor="black"/>
            
        </View>
    );

}


const HeaderButton = (props) => (

    <TouchableOpacity
    style={{
    backgroundColor: props.btnColor,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 40,
    }}
    >
<Text style={{color: props.textColor, fontSize: 15, fontWeight: "bold"}}>{props.text}</Text>
    </TouchableOpacity>
);