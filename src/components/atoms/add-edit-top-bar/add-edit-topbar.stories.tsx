import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddEditTopBarComponent from './add-edit-top-bar-component';

export default {
  title: 'Atoms/Add Edit Top Bar Component',
  component: AddEditTopBarComponent,
} as ComponentMeta<typeof AddEditTopBarComponent>;

const Template: ComponentStory<typeof AddEditTopBarComponent> = () => <AddEditTopBarComponent />;

export const Primary = Template.bind({});

