import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

export function AddCounterButton({
    addName
}: {
    addName: (name: string) => void;
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
        addName(name);
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
