import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import { Entypo } from '@expo/vector-icons';
import AppStyles from "../styles/AppStyles";

type props = {
    onPress: () => void,
}

export default function PageHeader(props:props) {
    return (
        <View style={AppStyles.commonStyles.headerStyle}>
            <Text style={AppStyles.commonStyles.headerTitleStyle}>Eat.It</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Entypo name="add-to-list" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}
