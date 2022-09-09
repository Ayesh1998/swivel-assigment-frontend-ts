import {combineReducers} from "redux";
import {EmployeesReducer} from "./employeesReducer";

//root reducer
const rootReducer = combineReducers({
    employees: EmployeesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>