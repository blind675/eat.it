import AsyncStorage from '@react-native-async-storage/async-storage';
import DBServices, {FoodEntity} from "./DBServices";
import TimeServices from "./TimeServices";
import {Keys} from "../Constants";

class SuggestionServices {

    static _instance = new SuggestionServices();

    _recommendMenu: Array<FoodEntity | undefined> = [];

    _lockedMeals: boolean[] = [false, false, false, false, false];

    _recommendFoodForCategory(category: string) {
        const foods = DBServices.foodList;

        // recommend breakfast
        let recommendedMeal: FoodEntity | null = null;
        let possibleRecommendedMeal: FoodEntity[] = [];

        foods.forEach((food) => {

            let foodCategory;

            switch (category) {
                case 'breakfast' :
                    foodCategory = food.isBreakfast;
                    break;
                case 'lunch' :
                    foodCategory = food.isLunch;
                    break;
                case 'snack':
                    foodCategory = food.isSnack;
                    break;
                default:
                    foodCategory = food.isSupper;
            }

            if (foodCategory) {
                const lastTimeEat = food.lastEatTimestamp;

                if (!lastTimeEat) {
                    possibleRecommendedMeal.push(food);
                } else {
                    const daysAgoEaten = TimeServices.daysSinceTimestamp(food.lastEatTimestamp!);
                    const daysAgoStartEaten = TimeServices.daysSinceTimestamp(food.startEatTimestamp!);

                    // food cooked yesterday and it can be eaten again so eat it before it spoils
                    if (daysAgoStartEaten < food.consecutiveDays) {
                        recommendedMeal = food;
                    } else {
                        // cool down period over so it ca be served again
                        if ((daysAgoStartEaten + daysAgoEaten) > food.coolDownDays) {
                            possibleRecommendedMeal.push(food);
                        }
                    }
                }
            }
        });

        if (!recommendedMeal) {
            recommendedMeal = possibleRecommendedMeal[Math.floor(Math.random() * possibleRecommendedMeal.length)];
        }

        // console.log(' --- recommended meal for:', category, ' - ', recommendedMeal);

        if (recommendedMeal) {
            recommendedMeal.suggestedTimeStamp = Date.now();
        }

        return recommendedMeal;
    }

    _suggestMealForCategoryAndIndex(category: string, index: number) {
        return this._lockedMeals[index] ? this._recommendMenu[index] : SuggestionServices._instance._recommendFoodForCategory(category);
    }

    _suggestNewMenu() {

        SuggestionServices._instance._recommendMenu = [
            this._suggestMealForCategoryAndIndex('breakfast', 0),
            this._suggestMealForCategoryAndIndex('snack', 1),
            this._suggestMealForCategoryAndIndex('lunch', 2),
            this._suggestMealForCategoryAndIndex('snack', 3),
            this._suggestMealForCategoryAndIndex('supper', 4)
        ];
    }

    _updateTheDataBaseWithTimestamp() {
        if (!SuggestionServices._instance._recommendMenu.includes(undefined)) {
            SuggestionServices._instance._recommendMenu.forEach((food) => {
                food!.lastEatTimestamp = food!.suggestedTimeStamp;

                if (!food!.startEatTimestamp || TimeServices.daysDifferenceBetweenTimestamp(food!.startEatTimestamp, food!.suggestedTimeStamp!) > food!.consecutiveDays) {
                    food!.startEatTimestamp = food!.suggestedTimeStamp;
                }

                if (food!.timesEaten) {
                    food!.timesEaten = food!.timesEaten + 1;
                } else {
                    food!.timesEaten = 0;
                }


                DBServices.updateFood(food!);
            });
        }
    }

    _didTheDayPassed() {

        let menuSuggestedTimeStamp = Date.now();
        if (!SuggestionServices._instance._recommendMenu.includes(undefined)) {
            for (let index = 0; index < SuggestionServices._instance._recommendMenu.length; index++) {
                if (SuggestionServices._instance._recommendMenu[index]) {
                    menuSuggestedTimeStamp = SuggestionServices._instance._recommendMenu[index]!.suggestedTimeStamp!;
                    break;
                }
            }
        }

        const daysPassed = TimeServices.daysSinceTimestamp(menuSuggestedTimeStamp);

        return daysPassed !== 0;
    }

    // @ts-ignore
    static get lockedMeals() {
        return this._instance._lockedMeals;
    }

    // @ts-ignore
    static get suggestedMenu() {
        const recommendations: FoodEntity[] = []

        if (this._instance._recommendMenu) {

            this._instance._recommendMenu.forEach((food) => {
                if (food) {
                    recommendations.push(food);
                }

                return [];
            });
        }

        return recommendations;
    }

    // @ts-ignore
    static get isTheSuggestionMadeToday() {
        return !this._instance._recommendMenu || !this._instance._didTheDayPassed();
    }

    static setLockedMeals(lockedMeals: boolean[]) {
        this._instance._lockedMeals = lockedMeals;
    }

    static resetLockedMeals() {
        this._instance._lockedMeals = [false, false, false, false, false];
    }

    static loadSuggestedMenu() {
        AsyncStorage.getItem(Keys.recommendedMenu).then((value) => {
            return JSON.parse(value!);
        }).then(savedRecommendMenu => {
            this._instance._recommendMenu = savedRecommendMenu;
        }).catch((error) => {
            console.log(' - Load from async storage error: ', error);
        });
    }

    static suggestedNewMenu() {

        console.log(' **** SuggestedNewMenu **** ');

        if (this._instance._recommendMenu && !this._instance._recommendMenu.includes(undefined) && this._instance._didTheDayPassed()) {
            this._instance._updateTheDataBaseWithTimestamp();
        }

        this._instance._suggestNewMenu();

        // clear this so i can use AsyncStorage again
        // AsyncStorage.clear();

        // TODO: should I delete this if?
        if (SuggestionServices.canUseSuggestion()) {
            const jsonValue = JSON.stringify(this._instance._recommendMenu)
            AsyncStorage.setItem(Keys.recommendedMenu, jsonValue)
                .then(() => {
                    console.log(' - Saved in the async storage.');
                })
                .catch((error) => {
                    console.log(' - Save in the async storage error: ', error);
                });
        }
    }

    static canUseSuggestion() {

        if (this._instance._recommendMenu) {
            let canUse = true;

            this._instance._recommendMenu.forEach((item) => {
                if (!item) {
                    canUse = false;
                }
            });

            return canUse;
        }

        return false;

    }
}

export default SuggestionServices;
