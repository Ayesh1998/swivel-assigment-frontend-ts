import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddEditTopBarComponent from './add-edit-top-bar-component';

export default {
  title: 'Atoms/Grid Table List Switch Button',
  component: AddEditTopBarComponent,
} as ComponentMeta<typeof AddEditTopBarComponent>;

const Template: ComponentStory<typeof AddEditTopBarComponent> = () => <AddEditTopBarComponent />;

export const Component = Template.bind({});

