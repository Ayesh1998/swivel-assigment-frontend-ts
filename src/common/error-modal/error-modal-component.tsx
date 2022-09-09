import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {resetErrors} from "../../redux/actions/employeeActions";
import {FC, useState} from "react";
import React from 'react';

interface Props {
    error: string;
    fetch?: boolean;
}

const ErrorModalComponent: FC<Props> = ({error, fetch}) => {

    const [show, setShow] = useState<boolean>(true);
    const dispatch = useDispatch();

    //resetting error values in redux
    const handleCloseAndResetErrors = () : void => {
        dispatch(resetErrors());
        if (fetch) {
            setShow(false);
        }
    };

    return (
        <Modal show={show} onHide={handleCloseAndResetErrors}>
            <Modal.Header closeButton>
                <Modal.Title className="text-danger text-center" style={{width: "100%"}}>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>{error}</Modal.Body>
            <Modal.Footer>
                <Button className="modal-ok-button" onClick={handleCloseAndResetErrors}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModalComponent;