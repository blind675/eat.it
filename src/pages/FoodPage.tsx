import React from "react";
import {View, FlatList, Text, TouchableOpacity, Image} from "react-native";
import {NavigationScreenProp} from "react-navigation";
import {useIsFocused} from '@react-navigation/native';
import AppStyles from "../styles/AppStyles";
import PageHeader from "../components/PageHeader";
import {Pages} from "../Constants";
import DBServices, {FoodEntity} from "../services/DBServices";
import {AddMoreMealsInfo} from "../components/AddMoreMealsInfo";
import TimeServices from "../services/TimeServices";
import {Icon} from "../components/Icon";

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

    const renderIconsForFood = (food: FoodEntity) => {
        const {isBreakfast, isLunch, isSnack, isSupper} = food;

        return(
            <View style={AppStyles.commonStyles.row}>
                {isBreakfast ? <Icon source={require('../../assets/img/breakfast.png')}/> : <View style={AppStyles.commonStyles.icon}/>}
                {isSnack ? <Icon source={require('../../assets/img/snack.png')}/> : <View style={AppStyles.commonStyles.icon}/>}
                {isLunch ? <Icon source={require('../../assets/img/lunch.png')}/> : <View style={AppStyles.commonStyles.icon}/>}
                {isSupper ? <Icon source={require('../../assets/img/supper.png')}/> : <View style={AppStyles.commonStyles.icon}/>}
            </View>
        );
    }

    const renderFoodList = (listItem: listItem) => {
        const {foodName, lastEatTimestamp} = listItem.item;

        return (
            <TouchableOpacity
                style={AppStyles.commonStyles.foodListRow}
                onPress={() => {
                    props.navigation.navigate(Pages.addFood, {item: listItem.item})
                }}
            >
                <Text style={AppStyles.textStyles.text}>{foodName}</Text>
                <View
                    style={[AppStyles.commonStyles.container, AppStyles.commonStyles.row, AppStyles.commonStyles.iconAndDateRow]}
                >
                    <View>
                        <Text style={AppStyles.textStyles.text}>
                            {lastEatTimestamp ? TimeServices.printTimeStamp(lastEatTimestamp) : ''}
                        </Text>
                        {renderIconsForFood(listItem.item)}
                    </View>
                </View>
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
