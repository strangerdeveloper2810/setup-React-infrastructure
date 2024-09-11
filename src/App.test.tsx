import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Mock các component con nếu cần thiết
jest.mock("./Components/Header", () => () => <div>Header</div>);
jest.mock("./Components/Footer", () => () => <div>Footer</div>);

describe("App component", () => {
  test("renders Header and Footer", () => {
    render(<App />);

    // Kiểm tra xem Header và Footer có được render hay không
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
