import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from './nav-bar';

export default {
  title: 'Atoms/Navbar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Component = Template.bind({});

