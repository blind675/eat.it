import React from "react";
import {View} from "react-native";
import {NavigationScreenProp} from "react-navigation";
import AppStyles from "../styles/AppStyles";
import PageHeader from "../components/PageHeader";

type props = {
    navigation: NavigationScreenProp<object>
}

export default function AddFoodPage(props: props) {
    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader navigation={props.navigation}/>
        </View>
    );
}
