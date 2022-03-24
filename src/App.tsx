import React from "react";
import "./App.css";
import { FruitCounter } from "./components/FruitCounter";
import { Counter } from "./components/Counter";
import { Access_and_Add } from "./components/Access-and-Add";

function App(): JSX.Element {
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
                    <FruitCounter name={"Apples"}></FruitCounter>
                    <FruitCounter name={"Oranges"}></FruitCounter>
                    <FruitCounter name="Bananas"></FruitCounter>
                    <hr />
                </div>
                <div>
                    <Access_and_Add></Access_and_Add>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default App;
