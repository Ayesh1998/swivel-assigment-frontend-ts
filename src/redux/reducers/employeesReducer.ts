import {
    addEmployeeLogic, editEmployeeLogic,
    removeEmployeeLogic,
} from "./logics";
import {EmployeeInterface} from "../../models/interfaces";
import {Action} from "../actions/actionInterfaces";
import { ActionType } from "../actions/actionTypes";

export interface EmployeeState {
    employees: EmployeeInterface[] ,
    fetchError?: string,
    deleteError?: string,
    updateError?: string,
    addError?: string,
    gridView: boolean
}

const initState: EmployeeState = {
    employees: [],
    fetchError: undefined,
    deleteError: undefined,
    updateError: undefined,
    addError: undefined,
    gridView: true
};

//employee reducer
export const EmployeesReducer = (state: EmployeeState = initState, action: Action): EmployeeState => {
    switch (action.type) {
        case ActionType.ADD_EMPLOYEE:
            return {
                ...state,
                employees: addEmployeeLogic(
                    state.employees,
                    action?.payload
                ),
                addError: undefined
            };
        case ActionType.EDIT_EMPLOYEE:
            return {
                ...state,
                employees: editEmployeeLogic(
                    state.employees,
                    action?.payload
                ),
                updateError: undefined
            };
        case ActionType.REMOVE_EMPLOYEE:
            return {
                ...state,
                employees: removeEmployeeLogic(
                    state.employees,
                    action.payload
                ),
                deleteError: undefined
            };
        case ActionType.FETCH_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                fetchError: undefined
            };
        case ActionType.FETCH_EMPLOYEES_ERROR:
            return {
                ...state,
                fetchError: "Employees fetch failed",
            };
        case ActionType.REMOVE_EMPLOYEE_ERROR:
            return {
                ...state,
                deleteError: "Deleting employee failed",
            };
        case ActionType.EDIT_EMPLOYEE_ERROR:
            return {
                ...state,
                updateError: "Updating employee failed",
            };
        case ActionType.ADD_EMPLOYEES_ERROR:
            return {
                ...state,
                addError: "Adding employee failed",
            };
        case ActionType.TOGGLE_GRID:
            return {
                ...state,
                gridView: !state.gridView,
            };
        case ActionType.ERRORS_RESET:
            return {
                ...state,
                addError: undefined,
                updateError: undefined,
                deleteError: undefined
            };
        default:
            return state;
    }
};
