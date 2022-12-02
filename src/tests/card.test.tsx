
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import GridSingleItem from "../components/molecules/grid-single-item/grid-single-item";
import { EmployeeInterface, SingleItemProps } from "../models/interfaces";


describe("EmployeeCard", () => {
  let expectedProps:SingleItemProps;
  let expectedPropsWithoutImage:SingleItemProps;

  let tempEmployee:EmployeeInterface = {
    first_name: "FirstName",
    last_name: "LastName",
    email: "test@gmail.com",
    number: "0765678567",
    gender: "M",
  }
  beforeEach(() => {
    expectedProps = {
       ...tempEmployee,
        photo: "https://randomuser.me/api/portraits/men/92.jpg",
        employee:tempEmployee
    };
    expectedPropsWithoutImage = {
       ...tempEmployee,
        employee:tempEmployee
    };
  });

  test("should render name, email, phone, gender and image", () => {
    console.log("fgdsf , expectedProps" ,expectedProps);

    render(<GridSingleItem {...expectedProps} />);

    const name = screen.getByText(
      `${expectedProps.first_name} ${expectedProps.last_name}`
    );
    const email = screen.getByText(expectedProps.email);
    const number = screen.getByText(expectedProps.number);
    const gender = screen.getByText("Male");
    // const photo = screen.getByText(expectedProps.photo);

    expect(name).toBeVisible();
    expect(email).toBeVisible();
    expect(number).toBeVisible();
    expect(gender).toBeVisible();
    // expect(photo).toBeVisible();
  });

//   test("should render name, email, phone, gender and text avatar", () => {
//     const { getByText, getByAltText } = render(
//       <GridSingleItem {...expectedPropsWithoutImage} />
//     );
//     const name = getByText(
//       `${expectedPropsWithoutImage.employee.firstName} ${expectedPropsWithoutImage.employee.lastName}`
//     );
//     const email = getByText(expectedPropsWithoutImage.employee.email);
//     const number = getByText(expectedPropsWithoutImage.employee.number);
//     const gender = getByText("Male");
//     const textAvatar = getByText("FL");

//     expect(name).toBeVisible();
//     expect(email).toBeVisible();
//     expect(number).toBeVisible();
//     expect(gender).toBeVisible();
//     expect(textAvatar).toBeVisible();
//   });
});