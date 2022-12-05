import React from "react";
import { render, screen  } from '@testing-library/react';
import InputErrorMessageComponent from "../../components/atoms/input-error-message/input-error-message-component";

describe("Input Error Message", () => {

  it("Input Error Message component defined testing", async () => {
    render(<InputErrorMessageComponent error="Error" />)
    expect(screen.getByText("Error")).toBeDefined();
  });

});