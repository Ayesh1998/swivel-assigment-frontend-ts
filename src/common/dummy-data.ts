import { EmployeeInterface, SingleItemProps } from "../models/interfaces";

let employee: EmployeeInterface = {
  first_name: "Ayesh",
  last_name: "Lakshan",
  email: "ayesh@gmail.com",
  number: "0771223343",
  gender: "M",
  id: "2",
  photo: "https://randomuser.me/api/portraits/men/92.jpg",
};

export const tempEmployees: SingleItemProps[] = [
  {
    ...employee,
    employee: employee,
  },
  {
    ...employee,
    employee: employee,
  },
  {
    ...employee,
    employee: employee,
  },
  {
    ...employee,
    employee: employee,
  },
  {
    ...employee,
    employee: employee,
  },
];
