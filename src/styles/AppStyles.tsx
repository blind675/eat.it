import {StyleSheet} from 'react-native';

const dimensions = {
    // heights
    headerHeight: 80,

    headerPaddingTop: 35,
    paddingGeneral: 16,

    marginSmall: 8,

    suggestButtonContainersHeight: 80,
    suggestButtonContainersTopMargin: 20,
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
    sizeBig: 22,
    sizeHeader: 26,
    sizeCellTitle: 18,
    sizeButton: 20,
    sizeSuggestButton: 23,
}

//TODO: make singleton ??
//TODO: export constants

class AppStyles {
    static init() {
        //TODO: load color and font size from user defaults
    }

    // @ts-ignore
    static get colors() {
        return colors;
    }

    // @ts-ignore
    static get textStyles() {
        return StyleSheet.create({
            text: {
                fontSize: font.sizeNormal,
                color: colors.black,
            },
            headerTitle: {
                fontSize: font.sizeHeader,
                color: colors.white,
                fontWeight: 'bold'
            },
            suggestButtonTitle: {
                fontSize: font.sizeSuggestButton,
            },
            buttonTitle: {
                fontSize: font.sizeButton,
                fontWeight: 'bold',
                color: colors.white,
            },
            cellTitle: {
                fontSize: font.sizeCellTitle,
                fontWeight: 'bold',
                color: colors.black,
            },
            cellMainTitle: {
                fontSize: font.sizeBig,
            },
            cellSelectedText: {
                color: colors.white
            }
        });
    }

    // @ts-ignore
    static get commonStyles() {
        return StyleSheet.create({
            appContainer: {
                flex: 1,
                alignSelf: 'stretch',
            },
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            },
            headerContainer: {
                alignSelf: 'stretch',
                height: dimensions.headerHeight,
                paddingTop: dimensions.headerPaddingTop,
                paddingHorizontal: dimensions.paddingGeneral,
                backgroundColor: colors.green,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            suggestButtonContainers: {
                height: dimensions.suggestButtonContainersHeight,
                paddingVertical: dimensions.paddingGeneral,
                marginTop: dimensions.suggestButtonContainersTopMargin,
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
            card: {
                flex: 1,
                alignSelf: 'stretch',
                marginHorizontal: dimensions.marginSmall,
                marginTop: dimensions.marginSmall,
                padding: dimensions.paddingGeneral,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.darkLiver,
            },
            cardSelected: {
                backgroundColor: colors.gray
            },
            cellHeaderContainer: {
                alignSelf: 'stretch',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            },
            cellMainContainer: {
                flex: 1,
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
            },
            displayMenuRow: {
                flexDirection: 'row',
                height: 110,
                alignSelf: 'stretch',
                justifyContent: 'center',
            }
        });
    }

}

export default AppStyles;
