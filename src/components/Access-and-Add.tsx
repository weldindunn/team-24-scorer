import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface visible {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

interface Lable {
    custom_label: string;
    set_custom_label: (lable: string) => void;
}

function Reveal({ visible, setVisible }: visible): JSX.Element {
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Beginning Create Button</Button>
        </div>
    );
}

function MakeNewLable({ custom_label, set_custom_label }: Lable): JSX.Element {
    return (
        <div>
            <Form.Control
                value={custom_label}
                onChange={(event: ChangeEvent) =>
                    set_custom_label(event.target.value)
                }
            />
        </div>
    );
}

export function Access_and_Add(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [custom_label, set_custom_label] = useState<string>("");
    const [Lablelist, set_labellist] = useState<string[]>([]);

    function add(lable: string) {
        set_labellist([...Lablelist, lable]);
    }

    return (
        <div>
            <div>
                <div>
                    A Button to Access a Form That Lets You Add a New Button
                    With a Custom Label
                </div>
                <div>
                    <Reveal visible={visible} setVisible={setVisible}></Reveal>{" "}
                    {visible && (
                        <div>
                            <MakeNewLable
                                custom_label={custom_label}
                                set_custom_label={set_custom_label}
                            ></MakeNewLable>

                            <div>
                                <Button onClick={() => add(custom_label)}>
                                    Add New Lable
                                </Button>
                            </div>

                            <div>
                                {Lablelist.map((lable: string) => (
                                    <Button type="button" key={lable}>
                                        {lable}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
