import {StyleSheet} from 'react-native';

class AppStyles {

    static _instance = new AppStyles();

    dimensions = {
        paddingGeneral: 16,
        paddingSmall: 8,

        marginGeneral: 16,
        marginSmall: 8,
        marginTiny: 4,

        headerHeight: 80,

        headerPaddingTop: 35,

        suggestButtonContainersHeight: 80,
        suggestButtonContainersTopMargin: 20,
        suggestButtonContainersBottomMargin: 20,
        suggestButtonWidth: 300,
        suggestButtonHeight: 65,

        buttonWidth: 200,
        buttonHeight: 50,
        deleteButtonWidth: 75,

        foodListRowHeight: 60,

        displayMenuRowHeight: 110,

        textInputHeight: 40,

        checkBoxHeight: 50,
        checkBoxWidth: 175,

        iconHeight: 12,
        iconWidth: 12,
    }

    colors = {
        white: '#FFFFFF',
        green: '#293132',       // white
        blue: '#547AA5',        // white
        red: '#C8331F',
        gray: '#4F5165',        // white
        darkLiver: '#474044',   // white
        turquoise: '#50D8D7',   // black
        black: '#0A0A0A',

    }

    font = {
        sizeNormal: 16,
        sizeMedium: 18,
        sizeBig: 22,
        sizeHeader: 26,
        sizeCellTitle: 18,
        sizeButton: 20,
        sizeSuggestButton: 23,
    }

    _baseStyles = StyleSheet.create({
        checkBox: {
            height: this.dimensions.checkBoxHeight,
            width: this.dimensions.checkBoxWidth,
            paddingHorizontal: this.dimensions.paddingGeneral,
            margin: this.dimensions.marginSmall,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 4,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        button: {
            width: this.dimensions.buttonWidth,
            height: this.dimensions.buttonHeight,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: this.colors.blue,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: this.colors.darkLiver,
        },
        icon: {
            width: this.dimensions.iconWidth,
            height: this.dimensions.iconHeight,
            margin: this.dimensions.marginTiny
        }
    });

    _baseFontStyles = StyleSheet.create({
        text: {
            fontSize: this.font.sizeNormal,
            color: this.colors.black,
        },
        checkBoxText: {
            textAlign: 'left',
            fontSize: this.font.sizeNormal,
        },
    });

    // @ts-ignore
    static get colors() {
        return this._instance.colors;
    }

    // @ts-ignore
    static get dimensions() {
        return this._instance.dimensions;
    }

    // @ts-ignore
    static get font() {
        return this._instance.font;
    }

    // @ts-ignore
    static get textStyles() {
        return StyleSheet.create({
            text: {
                ...AppStyles._instance._baseFontStyles.text
            },
            headerSmall: {
                fontSize: AppStyles.font.sizeMedium,
                color: AppStyles.colors.darkLiver
            },
            headerTitle: {
                fontSize: AppStyles.font.sizeHeader,
                color: AppStyles.colors.white,
                fontWeight: 'bold'
            },
            suggestButtonTitle: {
                fontSize: AppStyles.font.sizeSuggestButton,
            },
            buttonTitle: {
                fontSize: AppStyles.font.sizeButton,
                fontWeight: 'bold',
                color: AppStyles.colors.white,
            },
            cellTitle: {
                fontSize: AppStyles.font.sizeCellTitle,
                fontWeight: 'bold',
                color: AppStyles.colors.black,
            },
            cellMainTitle: {
                fontSize: AppStyles.font.sizeBig,
            },
            cellSelectedText: {
                color: AppStyles.colors.white
            },
            selectedCheckBoxText: {
                color: AppStyles.colors.white,
                ...AppStyles._instance._baseFontStyles.checkBoxText,
            },
            unselectedCheckBoxText: {
                color: AppStyles.colors.gray,
                ...AppStyles._instance._baseFontStyles.checkBoxText,
            },
            notEnoughMealsText: {
                fontSize: AppStyles.font.sizeMedium,
                fontWeight: 'bold',
                color: AppStyles.colors.red,
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
                ...AppStyles._instance._baseStyles.row,
            },
            icon: {
                ...AppStyles._instance._baseStyles.icon,
            },
            headerContainer: {
                alignSelf: 'stretch',
                height: AppStyles.dimensions.headerHeight,
                paddingTop: AppStyles.dimensions.headerPaddingTop,
                paddingHorizontal: AppStyles.dimensions.paddingGeneral,
                backgroundColor: AppStyles.colors.green,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            suggestButtonContainers: {
                height: AppStyles.dimensions.suggestButtonContainersHeight,
                paddingVertical: AppStyles.dimensions.paddingGeneral,
                marginTop: AppStyles.dimensions.suggestButtonContainersTopMargin,
                marginBottom: AppStyles.dimensions.suggestButtonContainersBottomMargin,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
            },
            suggestButton: {
                width: AppStyles.dimensions.suggestButtonWidth,
                height: AppStyles.dimensions.suggestButtonHeight,
                borderRadius: 20,
            },
            button: {
                ...AppStyles._instance._baseStyles.button,
            },
            card: {
                flex: 1,
                alignSelf: 'stretch',
                marginHorizontal: AppStyles.dimensions.marginSmall,
                marginTop: AppStyles.dimensions.marginSmall,
                padding: AppStyles.dimensions.paddingGeneral,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: AppStyles.colors.darkLiver,
            },
            cardSelected: {
                backgroundColor: AppStyles.colors.gray
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
                height: AppStyles.dimensions.displayMenuRowHeight,
                alignSelf: 'stretch',
                justifyContent: 'center',
            },
            foodListRow: {
                height: AppStyles.dimensions.foodListRowHeight,
                padding: AppStyles.dimensions.paddingSmall,
                paddingLeft: AppStyles.dimensions.paddingGeneral,
                marginLeft: AppStyles.dimensions.marginSmall,
                flexDirection: 'row',
                alignSelf: 'stretch',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: AppStyles.colors.darkLiver,
            },
            foodInputSection: {
                padding: AppStyles.dimensions.paddingGeneral,
            },
            foodNameInput: {
                fontSize: AppStyles.font.sizeNormal,
                height: AppStyles.dimensions.textInputHeight,
                marginTop: AppStyles.dimensions.marginSmall,
                paddingLeft: AppStyles.dimensions.paddingSmall,
                borderBottomColor: AppStyles.colors.darkLiver,
                borderBottomWidth: 1,
            },
            foodSaveSection: {
                ...AppStyles._instance._baseStyles.row,
                padding: AppStyles.dimensions.paddingGeneral,
                justifyContent: 'space-around',
            },
            selectedCheckBox: {
                backgroundColor: AppStyles.colors.gray,
                borderWidth: 0,
                ...AppStyles._instance._baseStyles.checkBox,
            },
            unselectedCheckBox: {
                backgroundColor: AppStyles.colors.white,
                borderWidth: 1,
                borderColor: AppStyles.colors.gray,
                ...AppStyles._instance._baseStyles.checkBox,
            },
            slider: {
                flex: 1,
                marginHorizontal: AppStyles.dimensions.marginGeneral,
            },
            deleteButton: {
                ...AppStyles._instance._baseStyles.button,
                width: AppStyles.dimensions.deleteButtonWidth,
                backgroundColor: AppStyles.colors.red,
            },
            iconAndDateRow: {
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingHorizontal: AppStyles.dimensions.paddingGeneral,
            }
        });
    }

}

export default AppStyles;
