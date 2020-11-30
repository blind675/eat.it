export const Pages = Object.freeze({
    main: 'MainPage',
    food: 'FoodPages',
    addFood: 'AddFoodPage',
});

export const DB = Object.freeze({
    name: 'eatItDb',
    version: '1',
    queries: {
        create: 'CREATE TABLE IF NOT EXISTS `foods` (\n' +
            '\t`id` INTEGER PRIMARY KEY,\n' +
            '\t`food_name` VARCHAR(50) NOT NULL,\n' +
            '\t`is_breakfast` BOOLEAN,\n' +
            '\t`is_snack` BOOLEAN,\n' +
            '\t`is_lunch` BOOLEAN,\n' +
            '\t`is_supper` BOOLEAN,\n' +
            '\t`cool_down_days` INT(5),\n' +
            '\t`consecutive_days` INT(5),\n' +
            '\t`last_eat_timestamp` INT(20),\n' +
            '\t`start_eat_timestamp` INT(20)\n' +
            ')',

        insert: 'INSERT INTO foods (\n' +
            'food_name, is_breakfast, is_snack, is_lunch, is_supper, cool_down_days, consecutive_days)\n' +
            ' VALUES (?,?,?,?,?,?,?)',

        update: 'UPDATE foods\n' +
            ' SET food_name= ?, is_breakfast= ?, is_snack= ?, is_lunch= ?, is_supper= ?, cool_down_days= ?, consecutive_days= ?, last_eat_timestamp= ?, start_eat_timestamp= ?\n' +
            ' WHERE id = ?',

        getAll: 'SELECT * FROM foods',

        delete: 'DELETE FROM foods\n '+
            'WHERE id= ?',
    }
});


