import axios from "axios";
import { url } from "../constants/constants";
import { EmployeeInterface } from "../models/interfaces";

//calling api endpoint to retrieve employees
export const fetchEmployeesApi = async () =>  {
    try {
        const response = await axios({
            method: "GET",
            url: encodeURI(`${url}api/employee`),
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=0, private, must-revalidate",
                Pragma: "no-cache",
            },
        });
        return response?.data;
    } catch (error) {
        throw new Error('Fetching employees unsuccessful!');
    }
}

//calling api endpoint to remove an employee
export const removeEmployeesApi = async (employee: EmployeeInterface) =>  {
    try {
        const response = await axios({
            method: "DELETE",
            url: encodeURI(`${url}api/employee/${employee._id}`),
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=0, private, must-revalidate",
                Pragma: "no-cache",
            },
        })
        return response?.data;
    } catch (error) {
        throw new Error('Removing employee unsuccessful!');
    }
}

//calling api endpoint to update an employee
export const updateEmployeesApi = async (employee: EmployeeInterface) =>  {
    try {
        const response = await axios({
            method: "PUT",
            url: encodeURI(`${url}api/employee/${employee._id}`),
            data: employee,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=0, private, must-revalidate",
                Pragma: "no-cache",
            },
        })
        return response?.data?.updatedEmployee;
    } catch (error) {
        throw new Error('Updating employee unsuccessful!');
    }
}

//calling api endpoint to add an employee
export const addEmployeesApi = async (employee: EmployeeInterface) =>  {
    try {
        const response = await axios({
            method: "POST",
            url: encodeURI(`${url}api/employee`),
            data: employee,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=0, private, must-revalidate",
                Pragma: "no-cache",
            },
        })
        return response?.data?.result;
    } catch (error) {
        throw new Error('Adding employee unsuccessful!');
    }
}



