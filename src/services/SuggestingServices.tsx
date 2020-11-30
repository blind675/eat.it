import DBServices, {FoodEntity} from "./DBServices";
import TimeServices from "./TimeServices";

export type SuggestedMenu = FoodEntity[];

class SuggestingServices {

    // TODO: make singleton not static

    static _recommendFoodForCategory(category: string) {
        const foods = DBServices.foodList;

        // recommend breakfast
        let recommendedBreakfast: FoodEntity | null = null;
        let possibleRecommendedBreakfast: FoodEntity[] = [];

        foods.forEach((food) => {

            let foodCategory = food.isSupper;

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
                    possibleRecommendedBreakfast.push(food);
                } else {
                    const daysAgoEaten = TimeServices.getDaysSinceTimestamp(food.lastEatTimestamp);
                    const daysAgoStartEaten = TimeServices.getDaysSinceTimestamp(food.startEatTimestamp);

                    // food cooked yesterday and it can be eaten again so eat it before it spoils
                    if (daysAgoStartEaten < food.consecutiveDays) {
                        recommendedBreakfast = food;
                    } else {
                        // cool down period over so it ca be served again
                        if ((daysAgoStartEaten + daysAgoEaten) > food.coolDownDays) {
                            possibleRecommendedBreakfast.push(food);
                        }
                    }
                }
            }
        });

        if (!recommendedBreakfast) {
            recommendedBreakfast = possibleRecommendedBreakfast[Math.floor(Math.random() * possibleRecommendedBreakfast.length)];
        }

        return recommendedBreakfast;
    }

    static suggestMenu() {

        const suggestions = [
            this._recommendFoodForCategory('breakfast'), // breakfast
            this._recommendFoodForCategory('snack'),
            this._recommendFoodForCategory('lunch'),
            this._recommendFoodForCategory('snack'),
            this._recommendFoodForCategory('supper')
        ];

        return suggestions;
    }

    static canUseSuggestion(suggestion: SuggestedMenu) {

        let canUse = true;

        suggestion.forEach((item) => {
           if(!item) {
               canUse = false;
           }
        });

        return canUse;
    }
}

export default SuggestingServices;
