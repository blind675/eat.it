import React from "react";
import {View} from "react-native";
import {Cell} from "./Cell";
import AppStyles from "../styles/AppStyles";
import TimeServices from "../services/TimeServices";
import {SuggestedMenu} from "../services/SuggestingServices";

type props = {
    suggestedMenu: SuggestedMenu
}

export default function MenuDisplay(props:props) {

    const nextMealCellIndex = TimeServices.nextMealIndex;

    return (
        <>
            <Cell label='Next meal:' title={props.suggestedMenu[nextMealCellIndex].foodName} titleTextStyle={AppStyles.textStyles.cellMainTitle}/>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell
                    label='Breakfast:'
                    title={props.suggestedMenu[0].foodName}
                    selected={nextMealCellIndex === 0}
                    onPress={(isLocked) => {
                        // TODO: what now :) ??
                    }}
                />
                <Cell
                    label='Snack:'
                    title={props.suggestedMenu[1].foodName}
                    selected={nextMealCellIndex === 1}
                    onPress={(isLocked) => {}}
                />
            </View>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell
                    label='Lunch main:'
                    title={props.suggestedMenu[2].foodName}
                    selected={nextMealCellIndex === 2}
                    onPress={(isLocked) => {}}
                />
            </View>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell
                    label='Snack:'
                    title={props.suggestedMenu[3].foodName}
                    selected={nextMealCellIndex === 3}
                    onPress={(isLocked) => {}}
                />
                <Cell
                    label='Dinner:'
                    title={props.suggestedMenu[4].foodName}
                    selected={nextMealCellIndex === 4}
                    onPress={(isLocked) => {}}
                />
            </View>
        </>
    );
}
