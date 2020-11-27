import React from "react";
import {View} from "react-native";
import {Cell} from "./Cell";
import AppStyles from "../styles/AppStyles";



export default function MenuDisplay() {
    return (
        <>
            <Cell label='Next meal:' title={'Pizza'} titleTextStyle={AppStyles.textStyles.cellMainTitle}/>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell label='Breakfast:' title={'Pogacele'} onPress={(isLocked) => {}}/>
                <Cell label='Snack:' title={'Mango'} onPress={(isLocked) => {}}/>
            </View>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell label='Lunch main:' title={'Pizza'} selected onPress={(isLocked) => {}}/>
            </View>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell label='Snack:' title={'Inghetata'} onPress={(isLocked) => {}}/>
                <Cell label='Dinner:' title={'Iaurt'} onPress={(isLocked) => {}}/>
            </View>
        </>
    );
}
