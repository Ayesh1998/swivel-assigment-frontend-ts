import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddEditEmployeeForm from './add-edit-employee-form-component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Add Edit Employee Form',
  component: AddEditEmployeeForm,
} as ComponentMeta<typeof AddEditEmployeeForm>;

const Template: ComponentStory<typeof AddEditEmployeeForm> = (args) => <AddEditEmployeeForm {...args} />;

export const Component = Template.bind({});

Component.args = {
    first_name: "Ayesh",
    last_name: "Lakshan",
    email: "ayesh@gmail.com",
    number: "0771223343",
    gender: "M",
    first_nameError: "",
    last_nameError: "",
    emailError: "",
    numberError: "",
    genderError: "",
    addEmployee: false
};

