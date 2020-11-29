import React from "react";
import {View, FlatList, Text, TouchableOpacity} from "react-native";
import {NavigationScreenProp} from "react-navigation";
import AppStyles from "../styles/AppStyles";
import PageHeader from "../components/PageHeader";
import {Pages} from "../Constants";
import DBServices, {FoodEntity} from "../services/DBServices";

type props = {
    navigation: NavigationScreenProp<object>
}

type listItem = {
    item: FoodEntity
}

export default function FoodPage(props: props) {

    const renderFoodList = (listItem:listItem) => {
        return (
            <TouchableOpacity
                style={AppStyles.commonStyles.foodListRow}
                onPress={() => {
                    props.navigation.navigate(Pages.addFood, {item: listItem.item})
                }}
            >
                <Text style={AppStyles.textStyles.text}>{listItem.item.foodName}</Text>
                <Text style={AppStyles.textStyles.text}>{listItem.item.lastEatTimestamp}</Text>
                <Text style={AppStyles.textStyles.text}>{'>'}</Text>
            </TouchableOpacity>
        );

    }

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader
                onPress={() => {
                    props.navigation.navigate(Pages.addFood)
                }}
                rightMaterialIconName="add"
                navigation={props.navigation}/>

            <FlatList
                data={DBServices.foodList}
                renderItem={renderFoodList}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}
