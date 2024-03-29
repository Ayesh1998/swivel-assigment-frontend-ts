import {Container} from "react-bootstrap";
import {FC} from "react";
import React from "react";

const Error: FC = () => {
    return (
        <Container className="text-center mt-4">
            <p>Page not found for your request</p>
        </Container>
    );
}

export default Error;