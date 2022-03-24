import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import "./App.css";
import { FruitCounter } from "./components/FruitCounter";
import { Counter } from "./components/Counter";
//import { Access_and_Add } from "./components/Access-and-Add";
import { AddCounterButton } from "./components/AddCounterButton";

const NAMES = ["Apples", "Oranges", "Bananas"];

function App(): JSX.Element {
    const [names, setNames] = useState<string[]>(NAMES);

    function addName(name: string) {
        setNames([...names, name]);
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
                        {names.map((name: string) => (
                            <div key={name}>
                                <FruitCounter name={name}></FruitCounter>
                            </div>
                        ))}
                    </Stack>
                    <hr />
                </div>
                <div>
                    <AddCounterButton addName={addName}></AddCounterButton>
                </div>
            </div>
        </div>
    );
}

export default App;
