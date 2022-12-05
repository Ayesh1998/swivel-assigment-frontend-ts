import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopNavBarComponent from './top-nav-bar-component';

export default {
  title: 'Atoms/Top NavBar Component',
  component: TopNavBarComponent,
} as ComponentMeta<typeof TopNavBarComponent>;

const Template: ComponentStory<typeof TopNavBarComponent> = (args) => <TopNavBarComponent {...args} />;

export const Component = Template.bind({});


