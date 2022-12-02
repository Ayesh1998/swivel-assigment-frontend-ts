import {Col} from "react-bootstrap";
import "./input-error-message-styles.css";
import {FC} from "react";
import React from 'react';

interface Props {
    error: string | undefined;
}

//error component for input fields in forms
const InputErrorMessageComponent: FC<Props> = ({error}) => {
    return (
        <>
            <Col md={4}/>
            <Col md={8} className="mt-1">
                <span className="input-error-message">{error}</span>
            </Col>
        </>
    );
}

export default InputErrorMessageComponent;
