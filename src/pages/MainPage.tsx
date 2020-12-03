import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import PageHeader from "../components/PageHeader";
import AppStyles from "../styles/AppStyles";
import {Button} from "../components/Button";
import MenuDisplay from "../components/MenuDisplay";
import DBServices, {FoodEntity} from "../services/DBServices";
import {Pages} from "../Constants";
import SuggestionServices from "../services/SuggestionServices";
import {AddMoreMealsInfo} from "../components/AddMoreMealsInfo";
import {useIsFocused} from "@react-navigation/native";

type props = {
    navigation: NavigationScreenProp<object>
}

export default function MainPage(props: props) {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [foodsInDB, setFoodsInDB] = useState(false);
    const [reloadCount, setReloadCount] = useState(1);


    useEffect(() => {
        DBServices.loadFoods(() => {
            setFoodsInDB(DBServices.areAnyFoodInDB);
            setTimeout(() => {

                if(!SuggestionServices.isTheSuggestionMadeToday) {
                    SuggestionServices.suggestedNewMenu();
                }

                setDataLoaded(true);
                }, 500);
        });
    }, [])

    // Hack to force a rerender.
    // Didn't want to use state libs like Redux or Mobx
    // TODO: I really need to use a state manager !!!! THIS
    const isFocused = useIsFocused();

    const renderSuggestedMenu = () => {
        if (foodsInDB) {
            const suggestedMenu: FoodEntity[] = SuggestionServices.suggestedMenu;
            const lockedMeals: boolean[] = SuggestionServices.lockedMeals;
            const canSuggestionBeUsed = SuggestionServices.canUseSuggestion();

            // console.log(' - recommended: ', suggestedMenu);

            if (!canSuggestionBeUsed) {
                return <AddMoreMealsInfo
                    message='Add more meals to be able to make suggestions. Please add some more.'/>
            } else {
                return (<>
                    <View style={AppStyles.commonStyles.container}>
                        <MenuDisplay
                            suggestedMenu={suggestedMenu}
                            lockedMeals={lockedMeals}
                        />
                    </View>
                    <View style={AppStyles.commonStyles.suggestButtonContainers}>
                        <Button
                            title="Suggest new menu"
                            buttonStyle={AppStyles.commonStyles.suggestButton}
                            titleStyle={AppStyles.textStyles.suggestButtonTitle}
                            onPress={() => {
                                SuggestionServices.suggestedNewMenu();
                                setReloadCount(reloadCount+1);
                            }}
                        />
                    </View>
                </>);
            }
        } else {
            return <AddMoreMealsInfo message='Please add meals you enjoy to be able to make suggestions.'/>;
        }

    }

    console.log(` *** MainPage render `);

    // TODO: add ad at the bottom of the screen

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader onPress={() => {
                props.navigation.navigate(Pages.food)
            }}/>
            {reloadCount && dataLoaded ? renderSuggestedMenu() : <View style={AppStyles.commonStyles.container}/>}
            <View style={{height: 80, backgroundColor: 'red'}}/>
        </View>
    );
}
