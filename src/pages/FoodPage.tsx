import React, {useState} from "react";
import {View, FlatList, Text, TouchableOpacity} from "react-native";
import {NavigationScreenProp} from "react-navigation";
import {useIsFocused} from '@react-navigation/native';
import AppStyles from "../styles/AppStyles";
import PageHeader from "../components/PageHeader";
import {Pages} from "../Constants";
import DBServices, {FoodEntity} from "../services/DBServices";
import {AddMoreMealsInfo} from "../components/AddMoreMealsInfo";

type props = {
    navigation: NavigationScreenProp<object>
}

type listItem = {
    item: FoodEntity
}

export default function FoodPage(props: props) {

    // Hack to force a rerender.
    // Didn't want to use state libs like Redux or Mobx
    const isFocused = useIsFocused();

    const renderFoodList = (listItem: listItem) => {
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
            {DBServices.foodList.length === 0
                ?
                <AddMoreMealsInfo message="Add your meals by taping here."/>
                :
                <FlatList
                    data={DBServices.foodList}
                    renderItem={renderFoodList}
                    keyExtractor={item => `${item.id || Math.random() * 1000}`}
                />
            }

        </View>
    )
}
