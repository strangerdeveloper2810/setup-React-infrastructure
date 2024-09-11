import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const headerElement = screen.getByText(/Header/i);
  const footerElement = screen.getByText(/Footer/i);
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
