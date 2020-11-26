import {StyleSheet} from 'react-native';

const dimensions = {
    // heights
    headerHeight: 80,

    headerPaddingTop: 35,
    paddingGeneral: 16,

    suggestButtonContainersHeight: 80,
    suggestButtonContainersBottomMargin: 20,
    suggestButtonWidth: 300,
    suggestButtonHeight: 65,

    buttonWidth: 200,
    buttonHeight: 50,
}

const colors = {
    white: '#FFFFFF',
    green: '#293132',       // white
    blue: '#547AA5',        // white
    gray: '#4F5165',        // white
    darkLiver: '#474044',   // white
    turquoise: '#50D8D7',   // black
    black: '#0A0A0A',

}

const font = {
    sizeNormal: 16,
    sizeHeader: 26,

    sizeButton: 20,
    sizeSuggestButton: 23,
}

// TODO: make singleton ??
// TODO: export constants

class AppStyles {
    static init() {
        // TODO: load color and font size from user defaults
    }

    // TODO: split text styles

    // @ts-ignore
    static get commonStyles() {

        const commonStyles = StyleSheet.create({
            appContainer: {
                flex: 1,
                alignSelf: 'stretch',
            },
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            },
            headerStyle: {
                alignSelf: 'stretch',
                height: dimensions.headerHeight,
                paddingTop: dimensions.headerPaddingTop,
                paddingHorizontal: dimensions.paddingGeneral,
                backgroundColor: colors.green,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            headerTitleStyle: {
                fontSize: font.sizeHeader,
                color: colors.white,
                fontWeight: 'bold'
            },
            suggestButtonContainers: {
                height: dimensions.suggestButtonContainersHeight,
                paddingVertical: dimensions.paddingGeneral,
                marginBottom: dimensions.suggestButtonContainersBottomMargin,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
            },
            suggestButton: {
                width: dimensions.suggestButtonWidth,
                height: dimensions.suggestButtonHeight,
                borderRadius: 20,
            },
            suggestButtonTitle: {
                fontSize: font.sizeSuggestButton,
            },
            button: {
                width: dimensions.buttonWidth,
                height: dimensions.buttonHeight,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.blue,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.darkLiver,
            },
            buttonTitle: {
                fontSize: font.sizeButton,
                fontWeight: 'bold',
                color: colors.white,
            },
            text: {
                fontSize: font.sizeNormal,
                color: colors.black,
            }
        });

        return commonStyles;
    }

}

export default AppStyles;
