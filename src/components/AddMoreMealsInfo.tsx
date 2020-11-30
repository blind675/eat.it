import React from "react";
import {Text, View} from "react-native";
import AppStyles from "../styles/AppStyles";
import {MaterialIcons} from "@expo/vector-icons";

type props = {
    message: string
}

const AddMoreMealsInfo = function(props:props) {
    return (
        <>
            <View style={{ flexDirection: 'row-reverse', }}>
                <MaterialIcons name="arrow-upward" size={80} color={AppStyles.colors.red} />
            </View>
            <View style={AppStyles.commonStyles.container}>
                <Text style={AppStyles.textStyles.notEnoughMealsText}>{props.message}</Text>
            </View>
        </>
    );
}

export {AddMoreMealsInfo};
