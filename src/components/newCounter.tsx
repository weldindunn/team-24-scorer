import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counters(): JSX.Element {
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

    return (
        <div>
            <div>
                <div>{total}</div>
                <div>
                    <span>
                        <Button onClick={addCounter}>+</Button>
                    </span>
                    <span>
                        <Button onClick={minusCounter}>-</Button>
                    </span>
                    <span>
                        <Button onClick={gettotal}>Total</Button>
                    </span>
                    <span>
                        <Button onClick={reset}>Reset</Button>
                    </span>
                </div>
            </div>
        </div>
    );
}
