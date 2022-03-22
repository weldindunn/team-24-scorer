import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    function addCounter(): void {
        setCount(count + 1);
    }

    return (
        <div>
            <Button onClick={addCounter}>
                This button has been clicked {count} times!
            </Button>
        </div>
    );
}
