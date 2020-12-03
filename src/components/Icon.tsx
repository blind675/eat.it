import React from "react";
import {Image} from "react-native";
import AppStyles from "../styles/AppStyles";

type props = {
    source: object,
    color: string
}

const Icon = function(props:props) {
    return (<Image source={props.source} style={[AppStyles.commonStyles.icon, {tintColor:props.color}]} />);
};

export {Icon};
