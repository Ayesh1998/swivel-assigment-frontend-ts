import GridSingleItem from "../../molecules/grid-single-item/grid-single-item";
import {useSelector} from "react-redux";
import {Row} from "react-bootstrap";
import ErrorModalComponent from "../../atoms/error-modal/error-modal-component";
import {EmployeeInterface} from "../../../models/interfaces";
import {FC} from "react";
import {RootState} from "../../../redux/reducers";
import React from 'react';

//Grid component for employees
const GridComponent:FC = () => {

    const employees = useSelector((state: RootState) => state.employees.employees);
    const deleteError = useSelector((state: RootState) => state.employees.deleteError);
    const addError = useSelector((state: RootState) => state.employees.addError);
    const updateError = useSelector((state: RootState) => state.employees.updateError);

    return (
        <Row className="mt-2">
            {deleteError && <ErrorModalComponent error={deleteError}/>}
            {addError && <ErrorModalComponent error={addError}/>}
            {updateError && <ErrorModalComponent error={updateError}/>}
            {employees.map((employee:EmployeeInterface) => (
                <GridSingleItem
                    key={employee?._id}
                    {...employee}
                    employee={employee}
                />
            ))}
        </Row>
    );
};

export default GridComponent;
