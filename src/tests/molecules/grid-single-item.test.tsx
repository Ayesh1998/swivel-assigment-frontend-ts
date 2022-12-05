import "@testing-library/jest-dom";
import {  render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GridSingleItem from "../../components/molecules/grid-single-item/grid-single-item";
import { EmployeeInterface, SingleItemProps } from "../../models/interfaces";
import { store } from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Grid Single Item", () => {
  let expectedProps: SingleItemProps;

  let tempEmployee: EmployeeInterface = {
    first_name: "FirstName",
    last_name: "LastName",
    email: "test@gmail.com",
    number: "0765678567",
    gender: "M",
  };
  beforeEach(() => {
    expectedProps = {
      ...tempEmployee,
      photo: "https://randomuser.me/api/portraits/men/92.jpg",
      employee: tempEmployee,
    };
  });

  test("should render name, email, phone, gender and image", () => {
    render(
      <Router>
        <Provider store={store}>
          <GridSingleItem {...expectedProps} />
        </Provider>
      </Router>
    );

    const name = screen.getByText(
      `${expectedProps.first_name} ${expectedProps.last_name}`
    );
    const email = screen.getByText(expectedProps.email);
    const number = screen.getByText(expectedProps.number);
    const gender = screen.getByText("Male");
    const photo = screen.getByAltText("personal avatar");

    expect(name).toBeVisible();
    expect(email).toBeVisible();
    expect(number).toBeVisible();
    expect(gender).toBeVisible();
    expect(photo).toBeVisible();
  });

});
