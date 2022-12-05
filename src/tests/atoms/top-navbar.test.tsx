import React from "react";
import { render, screen } from "@testing-library/react";
import TopNavBarComponent from "../../components/atoms/top-nav-bar/top-nav-bar-component";
import { store } from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("Header component testing", () => {
  it("Header component defined testing", async () => {
    render(
      <Router>
        <Provider store={store}>
          <TopNavBarComponent />
        </Provider>
      </Router>
    );
    expect(screen.getByText("Add Employee")).toBeDefined();
  });
});
