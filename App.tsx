import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import MainPage from "./src/MainPage";
import AppStyles from "./src/styles/AppStyles";
import DBServices, {FoodEntity} from "./src/services/DBServices";


export default function App() {

    DBServices.loadFoods();

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <MainPage/>
            <StatusBar style="auto"/>
        </View>
    );
}

