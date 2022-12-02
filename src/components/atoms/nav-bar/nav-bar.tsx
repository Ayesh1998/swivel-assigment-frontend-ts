import {Navbar} from "react-bootstrap";
import "./nav-bar-styles.css"
import {FC} from "react";
import React from 'react';

//Navbar component
const NavBar = () => {

    return (
        <div className="sticky-top">
            <Navbar className="navbar" variant="light">
                <Navbar.Brand className="navbar-brand">
                    Employee Manager
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default NavBar;