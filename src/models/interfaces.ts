export interface EmployeeInterface {
    first_name: string,
    last_name: string,
    email: string,
    number: string,
    gender: string,
    photo?: string,
    id?: string,
    _id?: string
}

export interface SingleItemProps {
    first_name: string;
    last_name: string;
    email: string;
    number: string;
    gender: string;
    id?: string;
    _id?: string;
    photo?: string;
    employee: EmployeeInterface;
}

export interface IGenderOptions {
    value: string;
    label: string;
  }