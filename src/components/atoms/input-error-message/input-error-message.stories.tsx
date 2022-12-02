import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputErrorMessageComponent from './input-error-message-component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Error Message',
  component: InputErrorMessageComponent,
} as ComponentMeta<typeof InputErrorMessageComponent>;

const Template: ComponentStory<typeof InputErrorMessageComponent> = (args) => <InputErrorMessageComponent {...args} />;

export const Showing = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Showing.args = {
    error: "Error"
};

