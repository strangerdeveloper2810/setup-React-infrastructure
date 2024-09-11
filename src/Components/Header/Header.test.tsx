import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./";

describe("Header component", () => {
  test("renders the header with the correct text", () => {
    render(<Header />);

    // Giả sử Header có chứa một tiêu đề với văn bản "My Header"
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
