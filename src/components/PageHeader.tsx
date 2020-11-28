import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {NavigationScreenProp} from "react-navigation";
import AppStyles from "../styles/AppStyles";


type props = {
    onPress?: () => void,
    navigation?: NavigationScreenProp<object>
    rightMaterialIconName?: string
}

export default function PageHeader(props: props) {

    const iconName = props.rightMaterialIconName || "playlist-add";

    const drawRightIcon = () => {
        if (props.onPress) {
            return (
                <TouchableOpacity onPress={props.onPress}>
                    <MaterialIcons name={iconName} size={30} color="white"/>
                </TouchableOpacity>
            );
        } else {
            return (<View style={{height: 45, width: 45}}/>)
        }
    }

    return (
        <View style={AppStyles.commonStyles.headerContainer}>
            {
                props.navigation &&
                <TouchableOpacity onPress={() => {
                    props.navigation && props.navigation.goBack()
                }}>
                    <Text style={AppStyles.textStyles.buttonTitle}>{"< Back"}</Text>
                </TouchableOpacity>

            }
            <Text style={AppStyles.textStyles.headerTitle}>Eat.It</Text>
            {drawRightIcon()}
        </View>
    );
}
