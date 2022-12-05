import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormInputFieldComponent from './form-input-field-component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Form Input Field',
  component: FormInputFieldComponent,
} as ComponentMeta<typeof FormInputFieldComponent>;

const Template: ComponentStory<typeof FormInputFieldComponent> = (args) => <FormInputFieldComponent {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  fieldValue: "Value",
  fieldPlaceholder: "placeholder",
  fieldLabel: "Label",
  fieldError: "Error"
};

