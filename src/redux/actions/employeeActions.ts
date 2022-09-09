import {EmployeeInterface} from "../../models/interfaces";
import {Dispatch} from "redux";
import {Action} from "./actionInterfaces";
import { ActionType } from "./actionTypes";
import { addEmployeesApi, fetchEmployeesApi, removeEmployeesApi, updateEmployeesApi } from "../../api/employee-api";

//employee adding action
export const addEmployee = (employee: EmployeeInterface) => async (dispatch: Dispatch<Action>) => {
    try {
        const addedEmployee: EmployeeInterface = await addEmployeesApi(employee);
        dispatch({
            type: ActionType.ADD_EMPLOYEE,
            payload: addedEmployee,
        });
    } catch (error) {
        dispatch({type: ActionType.ADD_EMPLOYEES_ERROR});
    }
};

//employee editing action
export const editEmployee = (employee: EmployeeInterface) => async (dispatch: Dispatch<Action>) => {
    try {
        const updatedEmployee: EmployeeInterface = await updateEmployeesApi(employee);
        dispatch({
            type: ActionType.EDIT_EMPLOYEE,
            payload: updatedEmployee,
        });
    } catch (error) {
        dispatch({type: ActionType.EDIT_EMPLOYEE_ERROR});
    }
};

//toggling grid and list view action
export const toggleGridView = () => ({
    type: "TOGGLE_GRID",
});

//employee removing action
export const removeEmployee =  (employee: EmployeeInterface) => async (dispatch: Dispatch<Action>) => {
    try {
        await removeEmployeesApi(employee);
        dispatch({
            type: ActionType.REMOVE_EMPLOYEE,
            payload: employee,
        });
    } catch (error) {
        dispatch({type: ActionType.REMOVE_EMPLOYEE_ERROR});
    }
};

//fetching employees action
export const fetchEmployees =  () => async (dispatch: Dispatch<Action>)  => {
    try {
        const employees: EmployeeInterface[] = await fetchEmployeesApi();
        dispatch({
            type: ActionType.FETCH_EMPLOYEES,
            payload: employees,
        });
    } catch (error) {
        dispatch({type: ActionType.FETCH_EMPLOYEES_ERROR});
    }
};

export const resetErrors = () => ({
    type: "ERRORS_RESET",
});


