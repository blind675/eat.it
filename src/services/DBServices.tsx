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
    countdownDays: number,
    consecutiveDays: number,
    lastEatTimestamp: number
};

class DBServices {

    static _instance = new DBServices();

    db: Database;
    foods: FoodEntity[];

    constructor() {
        this.db = SQLite.openDatabase(DB.name, DB.version);
        this.foods = [];
    }

    _load() {
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

                        for (let i = 0; i < DBRowCount; i++) {
                            const item = results.rows.item(i);
                            const food: FoodEntity = {
                                id: item.id,
                                foodName: item.food_name,
                                isBreakfast: item.is_breakfast,
                                isSnack: item.is_snack,
                                isLunch: item.is_lunch,
                                isSupper: item.is_supper,
                                countdownDays: item.countdown_days,
                                consecutiveDays: item.consecutive_days,
                                lastEatTimestamp: item.last_eat_timestamp
                            }
                            this.foods.push(food);
                        }
                    },
                );
            }, (error) => {
                console.error(error)
            }
        )
    }


    // const food: FoodEntity = {
    //     consecutiveDays: 0,
    //     countdownDays: 0,
    //     isBreakfast: false,
    //     isLunch: false,
    //     isSnack: false,
    //     isSupper: false,
    //     lastEatTimestamp: 0,
    //     foodName: 'mango'
    // }

    // DBServices.insertFood(food);

    _insert(food: FoodEntity) {
        this.db.transaction((tx) => {
            tx.executeSql(
                DB.queries.insert,
                [food.foodName, food.isBreakfast, food.isSnack, food.isLunch, food.isSupper, food.countdownDays, food.countdownDays, food.lastEatTimestamp],
                (tx, results) => {
                    // console.log('Insert in DB result:', results);
                },
                (_, error) => {
                    console.log('Insert in DB Error:', error);

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
                    // console.log('Insert in DB result:', results);
                },
                (_, error) => {
                    console.log('Insert in DB Error:', error);

                    return true;
                });

        });
    }


    // @ts-ignore
    static get areAnyFoodInDB() {
        return this._instance.foods.length !== 0;
    }

    static loadFoods() {
        return this._instance._load();
    }

    static insertFood(food: FoodEntity) {
        return this._instance._insert(food);
    }

    static drop() {
        return this._instance._dropTable();
    }
}

export default DBServices;

