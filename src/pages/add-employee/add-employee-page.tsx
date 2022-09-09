import {ChangeEvent, FC, useState} from "react";
import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import AddEditEmployeeForm from "../../components/add-edit-employee-form/add-edit-employee-form-component";
import AddEditTopBarComponent from "../../components/add-edit-top-bar/add-edit-top-bar-component";
import {bindActionCreators} from "redux";
import { actionCreators } from "../../redux";
import { ValidateEmail, ValidateGender, ValidateName, ValidateNumber } from "../../utils/form-validations/form-validations";
import { InputFieldsErrors, InputFieldsLabels, InputFieldsNames } from "../../constants/constants";

const AddEmployeePage: FC = () => {

    const dispatch = useDispatch();
    const { addEmployee } = bindActionCreators(actionCreators, dispatch);
    const navigate = useNavigate();

    const addEmployeePage = true;

    const [first_name, setFirst_name] = useState<string>('');
    const [last_name, setLast_name] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [first_nameError, setFirst_nameError] = useState<string | undefined>(undefined);
    const [last_nameError, setLast_nameError] = useState<string | undefined>(undefined);
    const [genderError, setGenderError] = useState<string | undefined>(undefined);
    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const [numberError, setNumberError] = useState<string | undefined>(undefined);

    const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
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
    }

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
                first_name,
                last_name,
                email,
                number,
                gender,
            }
            addEmployee(employeeObj);
            navigate("/employee/list");
            clearFields();
        }
    }

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
    }

    return (
        <div>
            <AddEditTopBarComponent/>
            <AddEditEmployeeForm first_name={first_name} last_name={last_name} gender={gender}
                                 email={email} number={number} first_nameError={first_nameError}
                                 last_nameError={last_nameError}
                                 genderError={genderError} emailError={emailError} numberError={numberError}
                                 handleInput={handleInput} handleSubmit={handleSubmit} addEmployee={addEmployeePage}/>
        </div>
    );
}

export default AddEmployeePage;