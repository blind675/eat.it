import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import PageHeader from "../components/PageHeader";
import AppStyles from "../styles/AppStyles";
import {Button} from "../components/Button";
import MenuDisplay from "../components/MenuDisplay";
import DBServices from "../services/DBServices";
import {Pages} from "../Constants";
import SuggestingServices from "../services/SuggestingServices";

type props = {
    navigation: NavigationScreenProp<object>
}

export default function MainPage(props: props) {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [foodsInDB, setFoodsInDB] = useState(false);

    useEffect(() => {
        DBServices.loadFoods(() => {
            setDataLoaded(true);
            setFoodsInDB(DBServices.areAnyFoodInDB);
        });
    }, [])
    
    const renderSuggestedMenu = () => {
        if (foodsInDB) {
            const suggestedMenu = SuggestingServices.suggestMenu();

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
                        }}
                    />
                </View>
            </>);
        } else {

            // TODO: update and set an arrow to the upper right
            return (
                <View style={AppStyles.commonStyles.container}>
                    <Text> Please add meals you like to eat to be able to make suggestions.</Text>
                </View>
            );
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
