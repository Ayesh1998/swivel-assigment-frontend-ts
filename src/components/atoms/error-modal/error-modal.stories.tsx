import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorModalComponent from './error-modal-component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Error Modal',
  component: ErrorModalComponent,
} as ComponentMeta<typeof ErrorModalComponent>;

const Template: ComponentStory<typeof ErrorModalComponent> = (args) => <ErrorModalComponent {...args} />;

export const Showing = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Showing.args = {
    error: "Error",
    fetch: false
};

