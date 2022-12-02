import { EmployeeInterface } from "../models/interfaces";
import http from "./api-handler";

export async function fetchEmployeesApi() {
  const response = await http()
    .get("api/employee")
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
        throw new Error('Fetching employees unsuccessful!');
    });
  return response;
}

//calling api endpoint to remove an employee
export async function removeEmployeesApi(employee: EmployeeInterface) {
    const response = await http()
      .delete(`api/employee/${employee._id}`)
      .then(function (response) {
        return response?.data;
      })
      .catch(function (error) {
        throw new Error("Removing employee unsuccessful!");
      });
    return response;
  }

//calling api endpoint to update an employee
export async function updateEmployeesApi(employee: EmployeeInterface) {
    const response = await http()
      .put(`api/employee/${employee._id}`, employee)
      .then(function (response) {
        return  response?.data?.updatedEmployee;
      })
      .catch(function (error) {
        throw new Error("Updating employee unsuccessful!");
      });
    return response;
  }

//calling api endpoint to add an employee
export async function addEmployeesApi(employee: EmployeeInterface) {
    const response = await http()
      .post(`api/employee`, employee)
      .then(function (response) {
        return  response?.data?.result;
      })
      .catch(function (error) {
        throw new Error("Adding employee unsuccessful!");
      });
    return response;
  }
