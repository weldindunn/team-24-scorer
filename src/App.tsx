import React from "react";
import "./App.css";
import { CounterApple } from "./components/CounterApple";
import { CounterBanana } from "./components/CounterBanana";
import { CounterOrange } from "./components/CounterOrange";
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
                    <span>Choose the amount of fruit you like</span>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <CounterApple></CounterApple>
            </div>
            <div style={{ textAlign: "center" }}>
                <CounterBanana></CounterBanana>
            </div>
            <div style={{ textAlign: "center" }}>
                <CounterOrange></CounterOrange>
            </div>
            <div style={{ textAlign: "center" }}>
                <Access_and_Add></Access_and_Add>
            </div>
        </div>
    );
}

export default App;
