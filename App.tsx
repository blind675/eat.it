import React from 'react';
import DBServices from "./src/services/DBServices";
import Router from "./src/Router";
import SuggestionServices from "./src/services/SuggestionServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

    // AsyncStorage.clear();
    SuggestionServices.loadSuggestedMenu();
    // DBServices.drop();

    return (<Router/>);
}

