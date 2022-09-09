import {EmployeeInterface} from "../../models/interfaces";
import { ActionType } from "./actionTypes";

interface AddEmployeeInterface {
    type: ActionType.ADD_EMPLOYEE,
    payload: EmployeeInterface
}

interface EditEmployeeInterface {
    type: ActionType.EDIT_EMPLOYEE,
    payload: EmployeeInterface
}

interface RemoveEmployeeInterface {
    type: ActionType.REMOVE_EMPLOYEE,
    payload: EmployeeInterface
}

interface FetchEmployeesInterface {
    type: ActionType.FETCH_EMPLOYEES,
    payload: EmployeeInterface[]
}

interface ToggleGridViewInterface {
    type: ActionType.TOGGLE_GRID
}

interface FetchEmployeeErrorInterface {
    type: ActionType.FETCH_EMPLOYEES_ERROR
}

interface EditEmployeeErrorInterface {
    type: ActionType.EDIT_EMPLOYEE_ERROR
}

interface RemoveEmployeeErrorInterface {
    type: ActionType.REMOVE_EMPLOYEE_ERROR
}

interface AddEmployeeErrorInterface {
    type: ActionType.ADD_EMPLOYEES_ERROR
}

interface ErrorResetInterface {
    type: ActionType.ERRORS_RESET
}

export type Action =
    AddEmployeeInterface
    | EditEmployeeInterface
    | RemoveEmployeeInterface
    | FetchEmployeesInterface
    | ToggleGridViewInterface
    | FetchEmployeeErrorInterface
    | EditEmployeeErrorInterface
    | RemoveEmployeeErrorInterface
    | AddEmployeeErrorInterface
    | ErrorResetInterface;