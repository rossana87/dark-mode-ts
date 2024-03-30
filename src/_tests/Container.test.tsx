import React from "react";
import Container from "../Components/Container";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../assets/context/Context";

describe("Container component", () => {
  it("should render Container as expected", () => {
    const { getByText } = render(
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    );

    // Check if "Hello World" text is rendered
    expect(getByText("Hello World")).toBe("Hello World");
  });
});
