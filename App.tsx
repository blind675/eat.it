import React from 'react';
import Router from "./src/Router";
import SuggestionServices from "./src/services/SuggestionServices";

export default function App() {

    console.log(' *** App started');

    SuggestionServices.loadSuggestedMenu();


    return (<Router/>);
}

