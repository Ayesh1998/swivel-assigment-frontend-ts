import React from "react";
import { render, screen  } from '@testing-library/react';
import NavBar from "../../components/atoms/nav-bar/nav-bar";

describe("Header component testing", () => {

  it("Header component defined testing", async () => {
    render(<NavBar />)
    expect(screen.getByText("Employee Manager")).toBeDefined();
  });

});