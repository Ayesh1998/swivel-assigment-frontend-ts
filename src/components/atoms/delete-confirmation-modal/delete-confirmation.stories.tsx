import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteConfirmationModalComponent from './delete-confirmation-modal-component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Delete Confirmation Modal',
  component: DeleteConfirmationModalComponent,
} as ComponentMeta<typeof DeleteConfirmationModalComponent>;

const Template: ComponentStory<typeof DeleteConfirmationModalComponent> = (args) => <DeleteConfirmationModalComponent {...args} />;

export const Showing = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Showing.args = {
    show: true
};

