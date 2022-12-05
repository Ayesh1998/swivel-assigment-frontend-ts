import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import FormInputFieldComponent, { IFormInputFieldComponentProps } from "../../components/atoms/form-input-field/form-input-field-component";

describe("Form Input Field", () => {

  let expectedProps: IFormInputFieldComponentProps = {
    fieldValue: "FirstName",
    fieldName: "firstName",
    fieldPlaceholder: "First Name",
    type: "text",
    fieldLabel: "First Name",
    fieldError: "",
    inputHandler: () => {}
  };

  test("Render Input filed", () => {
    render(
      <Router>
        <Provider store={store}>
          <FormInputFieldComponent {...expectedProps} />
        </Provider>
      </Router>
    );

    const input = screen.getByTestId("input field");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "First Name");
    expect(screen.queryByTestId("input error")).not.toBeInTheDocument();
  });

});
