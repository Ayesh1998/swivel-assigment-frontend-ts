import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import NavBar from "../components/atoms/nav-bar/nav-bar";
import TopNavBarComponent from "../components/atoms/top-nav-bar/top-nav-bar-component";

describe("Header component testing", () => {

  it("Header component defined testing", async () => {
    render(<TopNavBarComponent />)
    expect(screen.getByText("Add Employee")).toBeDefined();
  });

//   it("Header component has Employee Management testing", async () => {
//     render(<Header />)
//     expect(screen.getByText("Employee Management")).toBeInTheDocument();
//   });

});