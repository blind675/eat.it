import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import PageHeader from "../components/PageHeader";
import AppStyles from "../styles/AppStyles";
import {Button} from "../components/Button";
import MenuDisplay from "../components/MenuDisplay";
import DBServices from "../services/DBServices";
import {Pages} from "../Constants";
import SuggestionServices from "../services/SuggestionServices";
import {AddMoreMealsInfo} from "../components/AddMoreMealsInfo";

type props = {
    navigation: NavigationScreenProp<object>
}

export default function MainPage(props: props) {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [foodsInDB, setFoodsInDB] = useState(false);

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

    const renderSuggestedMenu = () => {
        if (foodsInDB) {
            const suggestedMenu = SuggestionServices.suggestedMenu;
            const canSuggestionBeUsed = SuggestionServices.canUseSuggestion();


            console.log(' - recommended: ', suggestedMenu);


            if (!canSuggestionBeUsed) {
                return <AddMoreMealsInfo
                    message='Add more meals to be able to make suggestions. Please add some more.'/>
            } else {
                return (<>
                    <View style={AppStyles.commonStyles.container}>
                        <MenuDisplay suggestedMenu={suggestedMenu}/>
                    </View>
                    <View style={AppStyles.commonStyles.suggestButtonContainers}>
                        <Button
                            title="Suggest new menu"
                            buttonStyle={AppStyles.commonStyles.suggestButton}
                            titleStyle={AppStyles.textStyles.suggestButtonTitle}
                            onPress={() => {
                                SuggestionServices.suggestedNewMenu();
                            }}
                        />
                    </View>
                </>);
            }
        } else {
            return <AddMoreMealsInfo message='Please add meals you enjoy to be able to make suggestions.'/>;
        }

    }

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader onPress={() => {
                props.navigation.navigate(Pages.food)
            }}/>
            {dataLoaded ? renderSuggestedMenu() : <View style={AppStyles.commonStyles.container}/>}
            <View style={{height: 80, backgroundColor: 'red'}}/>
        </View>
    );
}
