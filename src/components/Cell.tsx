import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import AppStyles from "../styles/AppStyles";
import {Card} from "./Card";

type props = {
    label: string,
    title: string,
    onPress?: (locked: boolean) => void,
    selected?: boolean,
    titleTextStyle?: object,
}

const Cell = function (props: props) {
    const cellSelectedText = props.selected ? AppStyles.textStyles.cellSelectedText : {color: AppStyles.colors.black};

    const [isLocked, setIsLocked] = useState(false);

    return (<Card selected={props.selected}>
        <View style={AppStyles.commonStyles.cellHeaderContainer}>
            <Text style={[AppStyles.textStyles.text, cellSelectedText]}>{props.label}</Text>
            {
                props.onPress &&

                <TouchableOpacity onPress={() => {
                    props.onPress && props.onPress(!isLocked);
                    setIsLocked(!isLocked);
                }}>
                    <MaterialIcons name={isLocked ? 'lock' : 'lock-open'} size={24} color={cellSelectedText.color}/>
                </TouchableOpacity>
            }
        </View>
        <View style={AppStyles.commonStyles.cellMainContainer}>
            <Text style={[AppStyles.textStyles.cellTitle, props.titleTextStyle, cellSelectedText]}>{props.title}</Text>
        </View>
    </Card>);
}

export {Cell};
