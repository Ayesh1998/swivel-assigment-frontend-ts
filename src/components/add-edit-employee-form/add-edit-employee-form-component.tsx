import { Button, Container, Form} from "react-bootstrap";
import "./add-employee-form-styles.css";
import { ChangeEvent, FC } from "react";
import React from "react";
import FormInputFieldComponent from "../../common/form-input-field/form-input-field-component";
import FormSelectFieldComponent from "../../common/form-select-field/form-select-field-component";
import { IGenderOptions } from "../../models/interfaces";
import { InputFieldsLabels, InputFieldsNames, InputFieldsPlaceholders } from "../../constants/constants";

interface Props {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  first_nameError: string | undefined;
  last_nameError: string | undefined;
  emailError: string | undefined;
  numberError: string | undefined;
  genderError: string | undefined;
  addEmployee: boolean;
  handleInput(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void;
  handleSubmit(): void;
}

//form for adding and editing an employee
const AddEditEmployeeForm: FC<Props> = ({
  email,
  number,
  first_name,
  last_name,
  handleInput,
  gender,
  handleSubmit,
  first_nameError,
  last_nameError,
  emailError,
  genderError,
  numberError,
  addEmployee,
}) => {
    
  const genderOptions: IGenderOptions[] = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
  ];

  return (
    <Container>
      <Form className="mt-5 form p-5">
        <FormInputFieldComponent
          fieldError={first_nameError}
          fieldLabel={InputFieldsLabels.FIRST_NAME_LABEL}
          fieldName={InputFieldsNames.FIRST_NAME}
          fieldPlaceholder={InputFieldsPlaceholders.FIRST_NAME_PLACEHOLDER}
          fieldValue={first_name}
          inputHandler={handleInput}
          type="text"
        />
        <FormInputFieldComponent
          fieldError={last_nameError}
          fieldLabel={InputFieldsLabels.LAST_NAME_LABEL}
          fieldName={InputFieldsNames.LAST_NAME}
          fieldPlaceholder={InputFieldsPlaceholders.LAST_NAME_PLACEHOLDER}
          fieldValue={last_name}
          inputHandler={handleInput}
          type="text"
        />
        <FormInputFieldComponent
          fieldError={emailError}
          fieldLabel={InputFieldsLabels.EMAIL_LABEL}
          fieldName={InputFieldsNames.EMAIL}
          fieldPlaceholder={InputFieldsPlaceholders.EMAIL_PLACEHOLDER}
          fieldValue={email}
          inputHandler={handleInput}
          type="email"
        />
        <FormInputFieldComponent
          fieldError={numberError}
          fieldLabel={InputFieldsLabels.NUMBER_LABEL}
          fieldName={InputFieldsNames.NUMBER}
          fieldPlaceholder={InputFieldsPlaceholders.NUMBER_PLACEHOLDER}
          fieldValue={number}
          inputHandler={handleInput}
          type="text"
        />
        <FormSelectFieldComponent
          fieldError={genderError}
          fieldLabel={InputFieldsLabels.GENDER_LABEL}
          fieldName={InputFieldsNames.GENDER}
          fieldValue={gender}
          inputHandler={handleInput}
          options={genderOptions}
        />
        <Button
          className="float-end form-submit-button"
          variant="primary"
          onClick={handleSubmit}
        >
          {addEmployee ? "Add" : "Save"}
        </Button>
      </Form>
    </Container>
  );
};

export default AddEditEmployeeForm;
