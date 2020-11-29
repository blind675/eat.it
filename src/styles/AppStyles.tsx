import {StyleSheet} from 'react-native';

const dimensions = {

    paddingGeneral: 16,
    paddingSmall: 8,

    marginGeneral: 16,
    marginSmall: 8,

    headerHeight: 80,

    headerPaddingTop: 35,

    suggestButtonContainersHeight: 80,
    suggestButtonContainersTopMargin: 20,
    suggestButtonContainersBottomMargin: 20,
    suggestButtonWidth: 300,
    suggestButtonHeight: 65,

    buttonWidth: 200,
    buttonHeight: 50,

    foodListRowHeight: 60,

    displayMenuRowHeight: 110,

    textInputHeight: 40,

    checkBoxHeight: 50,
    checkBoxWidth: 150,
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
    sizeMedium: 18,
    sizeBig: 22,
    sizeHeader: 26,
    sizeCellTitle: 18,
    sizeButton: 20,
    sizeSuggestButton: 23,
}

const _baseStyles = StyleSheet.create({
    checkBox: {
        height: dimensions.checkBoxHeight,
        width: dimensions.checkBoxWidth,
        paddingHorizontal: dimensions.paddingGeneral,
        margin: dimensions.marginSmall,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

const _baseFontStyles = StyleSheet.create({
    text: {
        fontSize: font.sizeNormal,
        color: colors.black,
    },
    checkBoxText: {
        textAlign: 'left',
        fontSize: font.sizeNormal,
    },
});

//TODO: make singleton ??


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
                ..._baseFontStyles.text
            },
            headerSmall: {
                fontSize: font.sizeMedium,
                color: colors.darkLiver
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
            },
            selectedCheckBoxText: {
                color: colors.white,
                ..._baseFontStyles.checkBoxText,
            },
            unselectedCheckBoxText: {
                color: colors.gray,
                ..._baseFontStyles.checkBoxText,
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
            row: {
              ..._baseStyles.row,
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
                height: dimensions.displayMenuRowHeight,
                alignSelf: 'stretch',
                justifyContent: 'center',
            },
            foodListRow: {
                height: dimensions.foodListRowHeight,
                padding: dimensions.paddingSmall,
                paddingLeft: dimensions.paddingGeneral,
                marginLeft: dimensions.marginSmall,
                flexDirection: 'row',
                alignSelf: 'stretch',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: colors.darkLiver,
            },
            foodInputSection: {
                padding: dimensions.paddingGeneral,
            },
            foodNameInput: {
                fontSize: font.sizeNormal,
                height: dimensions.textInputHeight,
                marginTop: dimensions.marginSmall,
                paddingLeft: dimensions.paddingSmall,
                borderBottomColor: colors.darkLiver,
                borderBottomWidth: 1,
            },
            foodSaveSection: {
                padding: dimensions.paddingGeneral,
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
            },
            selectedCheckBox: {
                backgroundColor: colors.gray,
                borderWidth: 0,
                ..._baseStyles.checkBox,
            },
            unselectedCheckBox: {
                backgroundColor: colors.white,
                borderWidth: 1,
                borderColor: colors.gray,
                ..._baseStyles.checkBox,
            },
            slider: {
                flex: 1,
                marginHorizontal:dimensions.marginGeneral,
            }
        });
    }

}

export default AppStyles;
