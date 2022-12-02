import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableListSingleItemComponent from './table-list-single-item-component';
import { Table } from 'react-bootstrap';

export default { 
  title: 'Molecules/Table Single Item',
  component: TableListSingleItemComponent,
} as ComponentMeta<typeof TableListSingleItemComponent>;

const Template: ComponentStory<typeof TableListSingleItemComponent> = (args) => {
  return(
    <Table className="table mt-5" bordered hover>
                <tbody>
                <TableListSingleItemComponent {...args} />
                </tbody>
            </Table>
  )
} ;

export const Showing = Template.bind({});

Showing.args = {
    first_name: "Ayesh",
    last_name: "Lakshan",
    email: "ayesh@gmail.com",
    number: "0771223343",
    gender: "M",
    id: "2",
    photo: "https://randomuser.me/api/portraits/men/92.jpg"
};

