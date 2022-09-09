import { EmployeeInterface } from "../../models/interfaces";

//employee adding logic
export const addEmployeeLogic = (employees:EmployeeInterface[], addedEmployee:EmployeeInterface) => {
    const employeesTemp = [...employees];
    employeesTemp.push(addedEmployee);
    return employeesTemp
};

//employee editing logic
export const editEmployeeLogic = (employees:EmployeeInterface[], editedEmployee:EmployeeInterface) => {
    const employeesTemp = [...employees];
    let index = employeesTemp.findIndex((employee) => employee._id === editedEmployee._id);
    employeesTemp.splice(index, 1, editedEmployee);
    return employeesTemp;
};

//employee removing logic
export const removeEmployeeLogic = (employees:EmployeeInterface[], removingEmployee:EmployeeInterface) => {
    const employeesTemp = [...employees]
    let index = employeesTemp.findIndex((item) => item._id === removingEmployee._id);
    employeesTemp.splice(index, 1,);
    return employeesTemp;
};
