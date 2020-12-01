import React from 'react';
import DBServices from "./src/services/DBServices";
import Router from "./src/Router";
import SuggestionServices from "./src/services/SuggestionServices";

export default function App() {

    SuggestionServices.loadSuggestedMenu();
    // DBServices.drop();

    return (<Router/>);
}

