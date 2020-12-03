import React from "react";
import {View} from "react-native";
import {Cell} from "./Cell";
import AppStyles from "../styles/AppStyles";
import TimeServices from "../services/TimeServices";
import {FoodEntity} from "../services/DBServices";
import SuggestionServices from "../services/SuggestionServices";

type props = {
    suggestedMenu: FoodEntity[],
    lockedMeals: boolean[],
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
                    locked={props.lockedMeals[0]}
                    onPress={(isLocked) => {
                        const lockedMeal = props.lockedMeals;
                        lockedMeal[0] = isLocked;
                        SuggestionServices.setLockedMeals(lockedMeal);
                    }}
                />
                <Cell
                    label='Snack:'
                    title={props.suggestedMenu[1].foodName}
                    selected={nextMealCellIndex === 1}
                    locked={props.lockedMeals[1]}
                    onPress={(isLocked) => {
                        const lockedMeal = props.lockedMeals;
                        lockedMeal[1] = isLocked;
                        SuggestionServices.setLockedMeals(lockedMeal);
                    }}
                />
            </View>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell
                    label='Lunch main:'
                    title={props.suggestedMenu[2].foodName}
                    selected={nextMealCellIndex === 2}
                    locked={props.lockedMeals[2]}
                    onPress={(isLocked) => {
                        const lockedMeal = props.lockedMeals;
                        lockedMeal[2] = isLocked;
                        SuggestionServices.setLockedMeals(lockedMeal);
                    }}
                />
            </View>
            <View style={AppStyles.commonStyles.displayMenuRow}>
                <Cell
                    label='Snack:'
                    title={props.suggestedMenu[3].foodName}
                    selected={nextMealCellIndex === 3}
                    locked={props.lockedMeals[3]}
                    onPress={(isLocked) => {
                        const lockedMeal = props.lockedMeals;
                        lockedMeal[3] = isLocked;
                        SuggestionServices.setLockedMeals(lockedMeal);
                    }}
                />
                <Cell
                    label='Dinner:'
                    title={props.suggestedMenu[4].foodName}
                    selected={nextMealCellIndex === 4}
                    locked={props.lockedMeals[4]}
                    onPress={(isLocked) => {
                        const lockedMeal = props.lockedMeals;
                        lockedMeal[4] = isLocked;
                        SuggestionServices.setLockedMeals(lockedMeal);
                    }}
                />
            </View>
        </>
    );
}
