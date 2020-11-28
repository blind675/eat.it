import React from 'react';
import DBServices from "./src/services/DBServices";
import Router from "./src/Router";


export default function App() {

    DBServices.loadFoods();

    return ( <Router/> );
}

