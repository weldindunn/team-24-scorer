import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Fruits } from "../interfaces/Fruits";

interface fruitCounterProps {
    fruit: Fruits;
    editFruit: (fruit: Fruits) => void;
}

export function FruitCounter({
    fruit,
    editFruit
}: fruitCounterProps): JSX.Element {
    function addCounter(): void {
        editFruit({ ...fruit, total: fruit.total + 1 });
    }
    function minusCounter(): void {
        editFruit({ ...fruit, total: fruit.total - 1 });
    }
    function reset(): void {
        editFruit({ ...fruit, total: 0 });
    }
    function deletecounter(): void {
        const lable = window.document.getElementById(fruit.name);
        if (lable === null) {
            alert("oops");
        } else {
            lable.style.display = "none";
        }
    }

    return (
        <div>
            <div>
                <div>
                    <div id={fruit.name}>
                        <Row>
                            <div>
                                {fruit.name}
                                {": "}
                                {fruit.total}
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <Button onClick={addCounter}>+</Button>
                                <Button onClick={minusCounter}>-</Button>
                                <Button onClick={reset}>Zero</Button>
                                <Button onClick={deletecounter}>Delete</Button>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
