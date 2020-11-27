import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AppStyles from "../styles/AppStyles";

type props = {
    onPress: () => void,
}

export default function PageHeader(props:props) {
    return (
        <View style={AppStyles.commonStyles.headerContainer}>
            <Text style={AppStyles.textStyles.headerTitle}>Eat.It</Text>
            <TouchableOpacity onPress={props.onPress}>
                <MaterialIcons name="playlist-add" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}
