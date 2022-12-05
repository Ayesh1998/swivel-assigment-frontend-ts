import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { EmployeeInterface, SingleItemProps } from "../../models/interfaces";
import { store } from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import TableListSingleItemComponent from "../../components/molecules/table-list-single-item/table-list-single-item-component";
import { Table } from "react-bootstrap";

describe("Table Single Item", () => {
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
          <Table>
            <tbody>
              <TableListSingleItemComponent {...expectedProps} />
            </tbody>
          </Table>
        </Provider>
      </Router>
    );

    const first_name = screen.getByText(expectedProps.first_name);
    const last_name = screen.getByText(expectedProps.last_name);
    const email = screen.getByText(expectedProps.email);
    const number = screen.getByText(expectedProps.number);
    const gender = screen.getByText("Male");
    const photo = screen.getByAltText("personal avatar");

    expect(first_name).toBeVisible();
    expect(last_name).toBeVisible();
    expect(email).toBeVisible();
    expect(number).toBeVisible();
    expect(gender).toBeVisible();
    expect(photo).toBeVisible();
  });
});
