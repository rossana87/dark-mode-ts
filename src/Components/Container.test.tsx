import React from "react";
import Container from "./Container";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "../assets/context/Context";

describe("Container component", () => {
  it("should render Container as expected", async () => {
    render(
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    );
    await waitFor(() => {
      const textElement = screen.getByText("Rossana Ventrella");
      expect(textElement).toBeDefined();
    });
  });
});
