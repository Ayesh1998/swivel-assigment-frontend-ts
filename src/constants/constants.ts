// export let url = "http://localhost:5000/";
export let url = "https://swivel-assignment1-backend.herokuapp.com/";

export enum InputFieldsNames{
    FIRST_NAME = "first_name",
    LAST_NAME = "last_name",
    EMAIL = "email",
    GENDER="gender",
    NUMBER = "number"
}

export enum InputFieldsLabels{
    FIRST_NAME_LABEL = "First Name",
    LAST_NAME_LABEL = "Last Name",
    EMAIL_LABEL = "Email",
    GENDER_LABEL="Gender",
    NUMBER_LABEL = "Phone"
}

export enum InputFieldsErrors{
    EMAIL_ERROR = "Enter a valid Email",
    GENDER_ERROR="Select a gender",
    NUMBER_ERROR = "Enter a valid Phone number"
}

export enum InputFieldsPlaceholders{
    FIRST_NAME_PLACEHOLDER = "Enter First Name",
    LAST_NAME_PLACEHOLDER = "Enter Last Name",
    EMAIL_PLACEHOLDER = "Enter Email",
    NUMBER_PLACEHOLDER = "Enter Phone No"
}