import React from 'react';
import {View} from 'react-native';
import { NavigationScreenProp } from "react-navigation";
import PageHeader from "../components/PageHeader";
import AppStyles from "../styles/AppStyles";
import {Button} from "../components/Button";
import MenuDisplay from "../components/MenuDisplay";
import DBServices from "../services/DBServices";
import {Pages} from "../Constants";

type props = {
    navigation : NavigationScreenProp<object>
}

export default function MainPage(props:props) {

    // TODO: display inf text if no food in db
    DBServices.areAnyFoodInDB;

    // else display this page

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader onPress={() => {props.navigation.navigate(Pages.food)}}/>
            <View style={AppStyles.commonStyles.container}>
                <MenuDisplay/>
            </View>
            <View style={AppStyles.commonStyles.suggestButtonContainers}>
                <Button
                    title="Suggest new menu"
                    buttonStyle={AppStyles.commonStyles.suggestButton}
                    titleStyle={AppStyles.textStyles.suggestButtonTitle}
                    onPress={() => {}}
                />
            </View>
            <View style={{height: 80, backgroundColor: 'red'}}/>
        </View>
    );
}