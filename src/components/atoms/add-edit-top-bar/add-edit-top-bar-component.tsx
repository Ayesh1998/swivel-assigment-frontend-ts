import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/reducers";

const AddEditTopBarComponent = () => {

    const grid = useSelector((state: RootState) => state.employees.gridView);

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col md={8}></Col>
                <Col md={1}>
                    <Link to={'/employee/list'}>
                        <Button className="top-nav-bar-long-button">
                            {
                                grid ? "Grid View" : "List View"
                            }
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default AddEditTopBarComponent;
