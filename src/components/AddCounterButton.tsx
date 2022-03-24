import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Fruit } from "../interfaces/Fruit";

export function AddCounterButton({
    addCounter
}: {
    addCounter: (fruit: Fruit) => void;
}): JSX.Element {
    const [visible, setVisibility] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    function setVisible() {
        setVisibility(true);
    }

    function setInvisible() {
        setVisibility(false);
    }

    function saveCounter() {
        addCounter({ name: name, total: 0 });
        setInvisible();
    }

    return (
        <div>
            <div>
                <Button onClick={setVisible}>New Counter</Button>
            </div>
            <div>
                {visible ? (
                    <div>
                        <div>
                            <Form.Group as={Row}>
                                <Form.Control
                                    value={name}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setName(event.target.value)}
                                />
                            </Form.Group>
                        </div>
                        <div>
                            <Button onClick={saveCounter}>Add</Button>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}
