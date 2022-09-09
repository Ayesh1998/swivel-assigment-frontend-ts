import "./table-list-single-item-styles.css";
import {FaTrashAlt} from "react-icons/fa";
import {Button} from "react-bootstrap";
import DeleteConfirmationModalComponent
    from "../../common/delete-confirmation-modal/delete-confirmation-modal-component";
import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {SingleItemProps} from "../../models/interfaces";
import React from 'react';

//single row in employee table list
const TableListSingleItemComponent:FC<SingleItemProps> = ({_id, id, first_name, last_name, gender, email, number, photo, employee}) => {

    const [show, setShow] = useState<boolean>(false);

    //handle closing the modal and remove employee
    const handleClose = (): void => setShow(false);

    //handle showing the modal
    const handleShow = (): void  => setShow(true);

    return (
        <tr className="table-row">
            <DeleteConfirmationModalComponent employee={employee} handleClose={handleClose} show={show}/>
            <td className="text-center">
                {
                    (photo !== "" && photo !== undefined && photo !== null) ?
                        <img src={photo} className="table-image"/> :
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"
                             className="table-image"/>
                }
            </td>
            <td className="align-middle">{first_name}</td>
            <td className="align-middle">{last_name}</td>
            <td className="align-middle">{email}</td>
            <td className="align-middle">{number}</td>
            <td className="align-middle">
                {
                    gender === "M" ? "Male" : "Female"
                }
            </td>
            <td className="table-data-actions align-middle">
                <Link to={'/employee/edit/' + _id}>
                    <Button variant="secondary" className="table-edit-button"> Edit </Button>
                </Link>
                <FaTrashAlt className="table-delete-icon" onClick={handleShow} color={"red"}/>
            </td>
        </tr>

    );
};

export default TableListSingleItemComponent;
