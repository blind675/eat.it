import React, {useState} from "react";
import {Text, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import AppStyles from "../styles/AppStyles";
import {Icon} from "./Icon";


type props = {
    title: string,
    onPress: (selected: boolean) => void
    selected?: boolean,
    iconSource?: {},
}

const CheckBox = function (props: props) {
    const [selected, setSelected] = useState(props.selected || false);

    return (
        <TouchableOpacity
            onPress={() => {
                props.onPress(!selected);
                setSelected(!selected);
            }}
            style={selected ? AppStyles.commonStyles.selectedCheckBox : AppStyles.commonStyles.unselectedCheckBox}
        >
            <MaterialIcons
                name={selected ? 'check-box' : 'check-box-outline-blank'}
                size={24}
                color={selected ? AppStyles.colors.white : AppStyles.colors.gray} />
            <Text
                style={selected ? AppStyles.textStyles.selectedCheckBoxText : AppStyles.textStyles.unselectedCheckBoxText}>
                {props.title}
            </Text>
            {props.iconSource && <Icon source={props.iconSource!} color={selected ? AppStyles.colors.white : AppStyles.colors.gray}/>}
        </TouchableOpacity>
    );
}

export {CheckBox};
