import * as SQLite from "expo-sqlite";
import {DB} from "../Constants";
import {Database} from "expo-sqlite/src/SQLite.types";

export type FoodEntity = {
    id?: number,
    foodName: string,
    isBreakfast: boolean,
    isSnack: boolean,
    isLunch: boolean,
    isSupper: boolean,
    coolDownDays: number,
    consecutiveDays: number,
    lastEatTimestamp?: number,
    startEatTimestamp?: number,
    suggestedTimeStamp?: number,
    timesEaten?: number,
};

class DBServices {

    static _instance = new DBServices();

    db: Database;
    foods: FoodEntity[];

    constructor() {
        // TODO: use counter how many times the meal was eaten - increase DB version
        this.db = SQLite.openDatabase(DB.name, DB.version);
        this.foods = [];
    }

    _load(callback?: () => void) {
        this.db.transaction(
            (tx) => {
                tx.executeSql(
                    DB.queries.create,
                    [],
                    (_, results) => {
                        // console.log('Create DB ');
                    },
                    (_, error) => {
                        console.log('Create DB Error:', error);

                        return true;
                    });

                tx.executeSql(
                    DB.queries.getAll,
                    [],
                    (_, results) => {
                        const DBRowCount = results.rows.length;

                        console.log(' - results.rows:', results.rows);

                        for (let i = 0; i < DBRowCount; i++) {
                            const item = results.rows.item(i);
                            const food: FoodEntity = {
                                id: item.id,
                                foodName: item.food_name,
                                isBreakfast: item.is_breakfast,
                                isSnack: item.is_snack,
                                isLunch: item.is_lunch,
                                isSupper: item.is_supper,
                                coolDownDays: item.cool_down_days,
                                consecutiveDays: item.consecutive_days,
                                lastEatTimestamp: item.last_eat_timestamp,
                                startEatTimestamp: item.start_eat_timestamp,
                                timesEaten: item.times_eaten
                            }
                            this.foods.push(food);
                        }
                        callback && callback();
                    },
                );
            }, (error) => {
                console.error(error)
            }
        )
    }

    _insert(food: FoodEntity, callback?: () => void) {
        this.db.transaction((tx) => {
            tx.executeSql(
                DB.queries.insert,
                 [food.foodName, food.isBreakfast, food.isSnack, food.isLunch, food.isSupper, food.coolDownDays, food.consecutiveDays],
                (tx, results) => {
                    this.foods.push(food);
                    callback && callback();
                },
                (_, error) => {
                    console.log('Insert in DB Error:', error);

                    return true;
                });
        });
    }

    _updateFoodInLocalStore(food: FoodEntity) {
        // console.log(' initial food list: ', this.foods);

        const foodIndex = this.foods.findIndex((item: FoodEntity) => food.id == item.id);
        this.foods[foodIndex] = food;

        // console.log(' food list after update: ', this.foods);
    }

    _update(food: FoodEntity, callback?: () => void) {
        this.db.transaction((tx) => {
            tx.executeSql(
                DB.queries.update,
                [food.foodName, food.isBreakfast, food.isSnack, food.isLunch, food.isSupper, food.coolDownDays, food.consecutiveDays, food.lastEatTimestamp, food.startEatTimestamp, food.timesEaten, food.id],
                (tx, results) => {
                    this._updateFoodInLocalStore(food);
                    callback && callback();
                },
                (_, error) => {
                    console.log('Update in DB Error:', error);

                    return true;
                });
        });
    }

    _deleteFoodFromLocalStore(food: FoodEntity) {
        this.foods = this.foods.filter((element) => element.id !== food.id );
    }

    _delete(food: FoodEntity, callback?: () => void) {
        this.db.transaction((tx) => {
            tx.executeSql(
                DB.queries.delete,
                [food.id],
                (tx, results) => {
                    this._deleteFoodFromLocalStore(food);
                    callback && callback();
                },
                (_, error) => {
                    console.log('Delete in DB Error:', error);

                    return true;
                });
        });

    }

    _dropTable() {
        this.db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE foods',
                [],
                (tx, results) => {
                    console.log('Drop DB result:', results);
                },
                (_, error) => {
                    console.log('Drop DB Error:', error);

                    return true;
                });

        });
    }


    // @ts-ignore
    static get foodList() {
        return this._instance.foods;
    }

    // @ts-ignore
    static get areAnyFoodInDB() {
        return this._instance.foods.length !== 0;
    }

    static loadFoods(callback?: () => void) {
        return this._instance._load(callback);
    }

    static insertFood(food: FoodEntity, callback?: () => void) {
        return this._instance._insert(food, callback);
    }

    static updateFood(food: FoodEntity, callback?: () => void) {
        return this._instance._update(food, callback);
    }

    static deleteFood(food: FoodEntity, callback?: () => void) {
        return this._instance._delete(food, callback);
    }

    static drop() {
        return this._instance._dropTable();
    }
}

export default DBServices;

