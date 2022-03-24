import React from "react";
import { Button, Row } from "react-bootstrap";
import { Fruit } from "../interfaces/Fruit";

interface fruitCounterProps {
    fruit: Fruit;
    editFruit: (fruit: Fruit) => void;
    deleteCounter: (name: string) => void;
}

export function FruitCounter({
    fruit,
    editFruit,
    deleteCounter
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

    function fireCounter(): void {
        deleteCounter(fruit.name);
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
                                <Button onClick={fireCounter}>Delete</Button>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
