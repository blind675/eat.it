import {useState} from "react";
import * as SQLite from "expo-sqlite";

// TODO: make singleton
export default function DBServices() {
    const [count, setCount] = useState(0);

    const db = SQLite.openDatabase('dbName', '1');

    const user = {
        name: 'Bob',
        age: 34
    }

    /*

    <Text>You clicked {count} times.</Text>
                <Button
                    title="Click Me"
                    onPress={() => {

                        console.log('-- add Food ');

                        db.transaction((tx) => {
                                tx.executeSql(
                                    'CREATE TABLE IF NOT EXISTS foods (id INT(12) NOT NULL, food_name VARCHAR(50) NOT NULL, cool_down INT(5),  PRIMARY KEY (id) )',
                                    [],
                                    (tx, results) => {
                                        console.log('Create Results', results.rowsAffected);
                                    }
                                );

                                tx.executeSql(
                                    'INSERT INTO foods (food_name, cool_down) VALUES (?,?)',
                                    ['Some food', 123],
                                    (tx, results) => {
                                        console.log('Results', results.rowsAffected);
                                    }
                                );
                            }, (error) => {
                                console.error(error)
                            }
                        );
                    }}
                    color="red"/>

                <Text>{user.name}</Text>
                </View>

     */
}
