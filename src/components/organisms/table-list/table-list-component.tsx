import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import TableListSingleItemComponent from "../../molecules/table-list-single-item/table-list-single-item-component";
import "./table-list-styles.css"
import ErrorModalComponent from "../../atoms/error-modal/error-modal-component";
import {FC} from "react";
import {EmployeeInterface} from "../../../models/interfaces";
import {RootState} from "../../../redux/reducers";
import React from 'react';

//Table list component for employees
const TableListComponent:FC = () => {

    const employees = useSelector((state: RootState) => state.employees.employees);
    const deleteError = useSelector((state: RootState) => state.employees.deleteError);

    return (
        <div>
            {deleteError && <ErrorModalComponent error={deleteError}/>}
            <Table className="table mt-5" bordered hover>
                <thead className="table-head">
                <tr>
                    <th className="table-head-content" style={{width: "13%"}}>Image</th>
                    <th className="table-head-content" style={{width: "13%"}}>First Name</th>
                    <th className="table-head-content" style={{width: "15%"}}>Last Name</th>
                    <th className="table-head-content" style={{width: "15%"}}>Email</th>
                    <th className="table-head-content" style={{width: "14%"}}>Phone</th>
                    <th className="table-head-content" style={{width: "10%"}}>Gender</th>
                    <th style={{width: "20%"}}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map((employee:EmployeeInterface) =>
                        <TableListSingleItemComponent
                            key={employee?._id}
                            {...employee}
                            employee={employee}
                        />)
                }
                </tbody>
            </Table>
        </div>
    );
}

export default TableListComponent;