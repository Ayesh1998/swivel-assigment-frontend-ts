import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GridSingleItem from "../../molecules/grid-single-item/grid-single-item";
import { Row } from "react-bootstrap";
import { SingleItemProps } from "../../../models/interfaces";
import { tempEmployees } from "../../../common/dummy-data";

export default {
  title: "Organisms/Grid Component",
  component: GridSingleItem,
} as ComponentMeta<typeof GridSingleItem>;



const Template: ComponentStory<typeof GridSingleItem> = (args) => {
  return (
    <Row className="mt-2">
      {tempEmployees.map((employee: SingleItemProps) => (
        <GridSingleItem {...employee} />
      ))}
    </Row>
  );
};

export const Component = Template.bind({});

// Showing.args = {
//   first_name: "Ayesh",
//   last_name: "Lakshan",
//   email: "ayesh@gmail.com",
//   number: "0771223343",
//   gender: "M",
//   id: "2",
//   photo: "https://randomuser.me/api/portraits/men/92.jpg",
// };
