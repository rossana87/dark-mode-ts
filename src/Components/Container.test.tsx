import React from "react";
import Container from "./Container";
import { getByText, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../assets/context/Context";

describe("Container component", () => {
  it("should render Container as expected", () => {
    render(
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    );
    const textElement = screen.getByText("Rossana Ventrella")
    expect(textElement).toBe('Rossana Ventrella')
  });
});
