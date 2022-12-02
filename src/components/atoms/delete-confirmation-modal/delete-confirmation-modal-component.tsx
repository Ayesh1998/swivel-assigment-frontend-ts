import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {FC} from "react";
import {EmployeeInterface} from "../../../models/interfaces";
import React from 'react';
import { actionCreators } from "../../../redux";
import {bindActionCreators} from "redux";

interface Props {
    show: boolean;
    employee: EmployeeInterface;
    handleClose(): void;
}

const DeleteConfirmationModalComponent: FC<Props> = ({show, handleClose, employee}) => {

    const dispatch = useDispatch();
    const { removeEmployee } = bindActionCreators(actionCreators, dispatch);

    //handling dispatching  removeEmployee and closing modal
    const handleDeleteEmployee = () => {
        removeEmployee(employee);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-danger text-center" style={{width: "100%"}}>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>Confirm delete</Modal.Body>
            <Modal.Footer>
                <Button className="modal-ok-button" onClick={handleDeleteEmployee}>
                    Ok
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteConfirmationModalComponent;