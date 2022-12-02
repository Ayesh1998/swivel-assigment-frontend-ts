import {Button, Col, Container, Row} from "react-bootstrap";
import "./top-nav-bar-styles.css";
import {FaList} from "react-icons/fa";
import {CgMenuGridR} from "react-icons/cg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleGridView} from "../../../redux/actions/employeeActions";
import {FC} from "react";
import {RootState} from "../../../redux/reducers";
import React from 'react';

//TopNavBar component with add employee and toggle list and grid buttons
const TopNavBarComponent:FC = () => {

    const grid = useSelector((state: RootState) => state.employees.gridView);
    const dispatch = useDispatch();

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col sm={11} md={11} className="top-nav-bar-add-employee-col">
                    <Link to={'/employee/add'}>
                        <Button className="top-nav-bar-long-button">
                            Add Employee
                        </Button>
                    </Link>
                </Col>
                <Col sm={1} md={1}>
                    <Button className="top-nav-bar-circle-button" onClick={() => dispatch(toggleGridView())}>
                        {grid ? <FaList className="top-nav-bar-icons"/> :
                            <CgMenuGridR className="top-nav-bar-icons"/>}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default TopNavBarComponent;