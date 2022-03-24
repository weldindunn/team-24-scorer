import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "./App.css";
import { FruitCounter } from "./components/FruitCounter";
import { Counter } from "./components/Counter";
//import { Access_and_Add } from "./components/Access-and-Add";
import { AddCounterButton } from "./components/AddCounterButton";
import { Fruits } from "./interfaces/Fruits";

const FRUITS: Fruits[] = [
    {
        name: "Apples",
        total: 0
    },
    {
        name: "Oranges",
        total: 0
    },
    {
        name: "Bananas",
        total: 0
    }
];

function App(): JSX.Element {
    const [fruits, setFruits] = useState<Fruits[]>(FRUITS);

    function editFruit(fruit: Fruits) {
        const newFruits = fruits.map((f) =>
            fruit.name === f.name ? fruit : f
        );

        setFruits(newFruits);
    }

    function zerofruits(): void {
        setFruits(
            fruits.map((f) => {
                return { ...f, total: 0 };
            })
        );
    }

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    UD CISC275 Team 24 Scorer
                </header>
                <p>Welcome to our wonderful counter!</p>
                <div style={{ textAlign: "center" }}>
                    <Counter></Counter>
                    <hr />
                </div>
                <div>
                    <span>Choose the amount of fruit you like!</span>
                    <Stack gap={3}>
                        {fruits.map((fruit: Fruits) => (
                            <div key={fruit.name}>
                                <FruitCounter
                                    fruit={fruit}
                                    editFruit={editFruit}
                                ></FruitCounter>
                            </div>
                        ))}
                    </Stack>
                    <div>
                        <Button onClick={zerofruits}>Zero</Button>
                    </div>
                    <hr />
                </div>
                {/* <div>
                    <AddCounterButton addName={addName}></AddCounterButton>
                </div> */}
            </div>
        </div>
    );
}

export default App;
