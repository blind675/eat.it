import React from "react";
import {View} from "react-native";
import {NavigationScreenProp} from "react-navigation";
import AppStyles from "../styles/AppStyles";
import PageHeader from "../components/PageHeader";
import {Pages} from "../Constants";

type props = {
    navigation: NavigationScreenProp<object>
}

export default function FoodPage(props: props) {

    // TODO: continue here

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader
                onPress={() => {
                    props.navigation.navigate(Pages.addFood)
                }}
                rightMaterialIconName="add"
                navigation={props.navigation}/>
        </View>
    )
}
