let nameAlphabetOnlyValidateRegx = /^[a-zA-Z]+$/;
let nameCharactersLimitValidateRegx = /^ *(\S *){6,10}$/;
let emailValidateRegx = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
let phoneNumberValidateRegx = /^(?:7|0|(?:\+94))[0-9]{9,10}$/;

export const ValidateEmail = (email: string): boolean => {
  if (!emailValidateRegx.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const ValidateNumber = (number: string): boolean => {
  if (!phoneNumberValidateRegx.test(number)) {
    return true;
  } else {
    return false;
  }
};

export const ValidateGender = (gender: string): boolean => {
  if (gender === "" || gender === "Select") {
    return true;
  } else {
    return false;
  }
};

export const ValidateName = (
  name: string,
  fieldName: string
): string | undefined => {
  if (
    !nameAlphabetOnlyValidateRegx.test(name) ||
    !nameCharactersLimitValidateRegx.test(name) ||
    name === ""
  ) {
    if (name === "") {
      return fieldName + " can't be empty";
    } else if (
      !nameAlphabetOnlyValidateRegx.test(name) &&
      !nameCharactersLimitValidateRegx.test(name)
    ) {
      return (
        fieldName + " can have only alphabets and between 6 and 10 characters"
      );
    } else if (!nameCharactersLimitValidateRegx.test(name)) {
      return fieldName + " must have characters between 6 and 10";
    } else if (!nameAlphabetOnlyValidateRegx.test(name)) {
      return fieldName + " can have only alphabets";
    }
  } else {
    return undefined;
  }
};
