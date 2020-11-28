import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Pages} from "./Constants";
import MainPage from "./pages/MainPage";
import FoodPage from "./pages/FoodPage";
import AddFoodPage from "./pages/AddFoodPage";

export default function Router() {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Pages.main} component={MainPage} />
                <Stack.Screen name={Pages.food} component={FoodPage} />
                <Stack.Screen name={Pages.addFood} component={AddFoodPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
