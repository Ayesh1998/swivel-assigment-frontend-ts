import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableListSingleItemComponent from '../../molecules/table-list-single-item/table-list-single-item-component';
import { Table } from 'react-bootstrap';
import { tempEmployees } from '../../../common/dummy-data';
import { SingleItemProps } from '../../../models/interfaces';

export default { 
  title: 'Organisms/Table List Component',
  component: TableListSingleItemComponent,
} as ComponentMeta<typeof TableListSingleItemComponent>;

const Template: ComponentStory<typeof TableListSingleItemComponent> = (args) => {
  return(
    <Table className="table mt-5" bordered hover>
    <thead className="table-head">
    <tr>
        <th className="table-head-content" style={{width: "13%"}}>Image</th>
        <th className="table-head-content" style={{width: "13%"}}>First Name</th>
        <th className="table-head-content" style={{width: "15%"}}>Last Name</th>
        <th className="table-head-content" style={{width: "15%"}}>Email</th>
        <th className="table-head-content" style={{width: "14%"}}>Phone</th>
        <th className="table-head-content" style={{width: "10%"}}>Gender</th>
        <th style={{width: "20%"}}>Actions</th>
    </tr>
    </thead>
    <tbody>
    {
        tempEmployees.map((employee:SingleItemProps) =>
        <TableListSingleItemComponent {...employee} />)
    }
    </tbody>
</Table>
  )
} ;

export const Component = Template.bind({});

