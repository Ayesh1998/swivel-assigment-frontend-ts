import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormSelectFieldComponent from './form-select-field-component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Form Select Field',
  component: FormSelectFieldComponent,
} as ComponentMeta<typeof FormSelectFieldComponent>;

const Template: ComponentStory<typeof FormSelectFieldComponent> = (args) => <FormSelectFieldComponent {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  fieldValue: "Male",
  fieldLabel: "Label",
  fieldError: "Error",
  options: [{
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  },
]
};

