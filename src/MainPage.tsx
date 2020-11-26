import React from 'react';
import {Text, View} from 'react-native';
import PageHeader from "./components/PageHeader";
import AppStyles from "./styles/AppStyles";
import {Button} from "./components/Button";

export default function MainPage() {

    // TODO: create component for menus display

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader onPress={() => {}}/>
            <View style={AppStyles.commonStyles.container}>
                <Text>You clicked times.</Text>
            </View>
            <View style={AppStyles.commonStyles.suggestButtonContainers}>
                <Button
                    title="Suggest new meal"
                    buttonStyle={AppStyles.commonStyles.suggestButton}
                    titleStyle={AppStyles.commonStyles.suggestButtonTitle}
                    onPress={() => {}}
                />
            </View>
        </View>
    );
}
