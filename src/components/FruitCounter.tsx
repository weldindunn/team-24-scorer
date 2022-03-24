import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";

export function FruitCounter({ name }: { name: string }): JSX.Element {
    const [count, setCount] = useState<number>(0);
    const [count1, setminusCount] = useState<number>(0);
    const [total, settotal] = useState<number>(0);

    function addCounter(): void {
        setCount(count + 1);
    }
    function minusCounter(): void {
        setminusCount(count1 - 1);
    }
    function gettotal(): void {
        settotal(count + count1);
    }
    function reset(): void {
        setCount(0);
        setminusCount(0);
        settotal(0);
    }
    function deletecounter(): void {
        const lable = window.document.getElementById("counter");
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
                    <div id="counter">
                        <Row>
                            <div>
                                {name}
                                {": "}
                                {total}
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <Button onClick={addCounter}>+</Button>
                                <Button onClick={minusCounter}>-</Button>
                                <Button onClick={gettotal}>Total</Button>
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
