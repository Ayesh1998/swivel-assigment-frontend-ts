import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GridSingleItem from './grid-single-item';

export default { 
  title: 'Molecules/Grid Single Item',
  component: GridSingleItem,
} as ComponentMeta<typeof GridSingleItem>;

const Template: ComponentStory<typeof GridSingleItem> = (args) => <GridSingleItem {...args} />;

export const Component = Template.bind({});

Component.args = {
    first_name: "Ayesh",
    last_name: "Lakshan",
    email: "ayesh@gmail.com",
    number: "0771223343",
    gender: "M",
    id: "2",
    photo: "https://randomuser.me/api/portraits/men/92.jpg"
};

