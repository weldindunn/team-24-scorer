import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    UD CISC275 Team 24 Scorer
                </header>
                <p>Welcome to our wonderful counter!</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Counter></Counter>
            </div>
        </div>
    );
}

export default App;
