import React from "react";
import {View} from "react-native";
import AppStyles from "../styles/AppStyles";

type props = {
    children: object
    selected?: boolean
}

const Card = function(props:props) {
    return (<View style={[AppStyles.commonStyles.card, props.selected ? AppStyles.commonStyles.cardSelected : null]}>
        {props.children}
    </View>);
}

export {Card};
