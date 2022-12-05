import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FC, useEffect, useState } from "react";
import AddEditEmployeeForm from "../../molecules/add-edit-employee-form/add-edit-employee-form-component";
import AddEditTopBarComponent from "../../atoms/add-edit-top-bar/add-edit-top-bar-component";
import { EmployeeInterface } from "../../../models/interfaces";
import { RootState } from "../../../redux/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";
import React from "react";
import { ValidateEmail, ValidateGender, ValidateName, ValidateNumber } from "../../../utils/form-validations/form-validations";
import { InputFieldsErrors, InputFieldsLabels, InputFieldsNames } from "../../../constants/constants";

const EditEmployee: FC = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const { editEmployee } = bindActionCreators(actionCreators, dispatch);
  const employees = useSelector((state: RootState) => state.employees.employees);
  const navigate = useNavigate();

  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [first_nameError, setFirst_nameError] = useState<string | undefined>(undefined);
  const [last_nameError, setLast_nameError] = useState<string | undefined>(undefined);
  const [genderError, setGenderError] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [numberError, setNumberError] = useState<string | undefined>(undefined);
  const [filteredEmployee, setFilteredEmployee] = useState<EmployeeInterface | null>(null);

  const addEmployee = false;

  useEffect(() => {
    const filteredEmployee: EmployeeInterface | undefined = employees.find(
      (employee: EmployeeInterface) => employee._id === id
    );
    if (filteredEmployee !== undefined) {
      setFirst_name(filteredEmployee.first_name);
      setLast_name(filteredEmployee.last_name);
      setEmail(filteredEmployee.email);
      setNumber(filteredEmployee.number);
      setGender(filteredEmployee.gender);
      setFilteredEmployee(filteredEmployee);
    }
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case InputFieldsNames.FIRST_NAME:
        setFirst_nameError(undefined);
        setFirst_name(e.target.value);
        break;
      case InputFieldsNames.LAST_NAME:
        setLast_name(e.target.value);
        setLast_nameError(undefined);
        break;
      case InputFieldsNames.GENDER:
        setGender(e.target.value);
        setGenderError(undefined);
        break;
      case InputFieldsNames.EMAIL:
        setEmail(e.target.value);
        setEmailError(undefined);
        break;
      case InputFieldsNames.NUMBER:
        setNumber(e.target.value);
        setNumberError(undefined);
        break;
    }
  };

  const handleSubmit = (): void => {

    let formValidation = true;
    let firstNameValidationResult = ValidateName( first_name, InputFieldsLabels.FIRST_NAME_LABEL);
    if (firstNameValidationResult) {
      formValidation = false;
      setFirst_nameError(firstNameValidationResult);
    } else {
      setFirst_nameError(undefined);
    }

    let lastNameValidationResult = ValidateName( last_name, InputFieldsLabels.LAST_NAME_LABEL);
    if (lastNameValidationResult) {
      formValidation = false;
      setLast_nameError(lastNameValidationResult);
    } else {
      setLast_nameError(undefined);
    }

    if (ValidateEmail(email)) {
      formValidation = false;
      setEmailError(InputFieldsErrors.EMAIL_ERROR);
    } else {
      setEmailError(undefined);
    }

    if (ValidateNumber(number)) {
      formValidation = false;
      setNumberError(InputFieldsErrors.NUMBER_ERROR);
    } else {
      setNumberError(undefined);
    }

    if (ValidateGender(gender)) {
      formValidation = false;
      setGenderError(InputFieldsErrors.GENDER_ERROR);
    } else {
      setGenderError(undefined);
    }

    if (formValidation) {
      const employeeObj = {
        ...filteredEmployee,
        first_name,
        last_name,
        email,
        number,
        gender,
      };
      editEmployee(employeeObj);
      navigate("/employee/list");
      clearFields();
    }
  };

  const clearFields = (): void => {
    setFirst_nameError(undefined);
    setFirst_name("");
    setLast_name("");
    setLast_nameError(undefined);
    setGender("");
    setGenderError(undefined);
    setEmail("");
    setEmailError(undefined);
    setNumber("");
    setNumberError(undefined);
  };

  return (
    <div>
      <AddEditTopBarComponent />
      <AddEditEmployeeForm
        first_name={first_name}
        last_name={last_name}
        gender={gender}
        email={email}
        number={number}
        first_nameError={first_nameError}
        last_nameError={last_nameError}
        genderError={genderError}
        emailError={emailError}
        numberError={numberError}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        addEmployee={addEmployee}
      />
    </div>
  );
};

export default EditEmployee;
