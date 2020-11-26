import React from "react";
import {Text, TouchableOpacity} from "react-native";
import AppStyles from "../styles/AppStyles";

type props = {
    onPress: () => void,
    title: string,
    buttonStyle?: object,
    titleStyle?: object
}

const Button = function(props:props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={[AppStyles.commonStyles.button, props.buttonStyle]}>
            <Text style={[AppStyles.commonStyles.buttonTitle,props.titleStyle]}> {props.title} </Text>
        </TouchableOpacity>
    );
}

export {Button}
