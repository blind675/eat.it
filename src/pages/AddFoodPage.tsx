import React from "react";
import {View, TextInput, Text, Alert} from "react-native";
import {NavigationParams, NavigationScreenProp} from "react-navigation";
import Slider from '@react-native-community/slider';
import AppStyles from "../styles/AppStyles";
import PageHeader from "../components/PageHeader";
import {Button} from "../components/Button";
import {CheckBox} from "../components/CheckBox";
import DBServices, {FoodEntity} from "../services/DBServices";

type props = {
    navigation: NavigationScreenProp<object>
    route: NavigationParams
}

export default function AddFoodPage(props: props) {
    const item: FoodEntity = props.route.params ? props.route.params.item : {};

    const [foodName, setFoodName] = React.useState(item.foodName || '');
    const [isBreakfast, setIsBreakfast] = React.useState(item.isBreakfast || false);
    const [isLunch, setIsLunch] = React.useState(item.isLunch || false);
    const [isSnack, setIsSnack] = React.useState(item.isSnack || false);
    const [isSupper, setIsSupper] = React.useState(item.isSupper || false);
    const [consecutiveDays, setConsecutiveDays] = React.useState(item.consecutiveDays || 1);
    const [coolDownDays, setCoolDownDays] = React.useState(item.coolDownDays || 0);

    const handle_saveButtonPressed = () => {

        if (foodName === '') {
            Alert.alert('Missing Food Name', 'Please provide a name for the food you want to save!');
            return;
        }

        if (!isBreakfast && !isSnack && !isLunch && !isSupper) {
            Alert.alert('Missing Food Category', 'Please select a least one category of when the food can be served!');
            return;
        }

        const foodItemToSave: FoodEntity = {
            ...item,
            foodName,
            isBreakfast,
            isSnack,
            isLunch,
            isSupper,
            coolDownDays,
            consecutiveDays,
        }

        // console.log('');
        // console.log(' foodItemToSave :', foodItemToSave);

        if (foodItemToSave.id) {
            // DBServices.updateFood(foodItemToSave);
        } else {
            DBServices.insertFood(foodItemToSave, () => props.navigation.goBack());
        }

    }

    return (
        <View style={AppStyles.commonStyles.appContainer}>
            <PageHeader navigation={props.navigation}/>

            <View style={AppStyles.commonStyles.foodInputSection}>
                <Text style={AppStyles.textStyles.headerSmall}>1. Meal Name:</Text>
                <TextInput
                    style={AppStyles.commonStyles.foodNameInput}
                    onChangeText={text => setFoodName(text)}
                    value={foodName}
                />
            </View>

            <View style={AppStyles.commonStyles.foodInputSection}>
                <Text style={AppStyles.textStyles.headerSmall}>2. When can it be served?</Text>
                <View style={AppStyles.commonStyles.row}>
                    <CheckBox
                        title='Breakfast'
                        selected={isBreakfast}
                        onPress={(selected) => setIsBreakfast(selected)}/>
                    <CheckBox
                        title='Snack'
                        selected={isSnack}
                        onPress={(selected) => setIsSnack(selected)}/>
                </View>
                <View style={AppStyles.commonStyles.row}>
                    <CheckBox
                        title='Lunch'
                        selected={isLunch}
                        onPress={(selected) => setIsLunch(selected)}/>
                    <CheckBox
                        title='Supper'
                        selected={isSupper}
                        onPress={(selected) => setIsSupper(selected)}/>
                </View>
            </View>

            <View style={AppStyles.commonStyles.foodInputSection}>
                <Text style={AppStyles.textStyles.headerSmall}>3. How many days in a row can you eat it?</Text>
                <View style={AppStyles.commonStyles.row}>
                    <Slider
                        style={AppStyles.commonStyles.slider}
                        step={1}
                        minimumValue={0}
                        maximumValue={5}
                        value={consecutiveDays}
                        onValueChange={(value) => {
                            setConsecutiveDays(value)
                        }}
                    />
                    <Text style={AppStyles.textStyles.text}>{consecutiveDays} Days</Text>
                </View>
            </View>

            <View style={AppStyles.commonStyles.foodInputSection}>
                <Text style={AppStyles.textStyles.headerSmall}>4. How many days do you not eat it after?</Text>
                <View style={AppStyles.commonStyles.row}>
                    <Slider
                        style={AppStyles.commonStyles.slider}
                        step={1}
                        minimumValue={0}
                        maximumValue={8}
                        value={coolDownDays}
                        onValueChange={(value) => {
                            setCoolDownDays(value)
                        }}
                    />
                    <Text style={AppStyles.textStyles.text}>{coolDownDays} Days</Text>
                </View>

            </View>

            <View style={AppStyles.commonStyles.foodSaveSection}>
                <Button
                    title="Save"
                    onPress={handle_saveButtonPressed}
                />
            </View>

        </View>
    );
}
