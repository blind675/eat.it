import DBServices, {FoodEntity} from "./DBServices";

export type SuggestedMenu = FoodEntity[]

class SuggestingServices {

    static suggestMenu() {
        const foods = DBServices.foodList;

        // recommend breakfast
        let recommendedBreakfast: FoodEntity = foods[0];
        foods.forEach((food) => {
            if (food.isBreakfast) {
                if (!food.lastEatTimestamp) {
                    recommendedBreakfast = food;
                } else {
                    // TODO: left here
                    // use lastEatTimestamp cool down and consecutive ... maybe we need a new field in BD
                }
            }
        });

        console.log('recommendedBreakfast:', recommendedBreakfast);

        return [recommendedBreakfast, {foodName: 'Meal S1'}, {foodName: 'Meal L'}, {foodName: 'Meal S2'}, {foodName: 'Meal Su'}]
    }
}

export default SuggestingServices;
