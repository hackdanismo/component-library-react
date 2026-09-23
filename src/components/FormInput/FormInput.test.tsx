import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FormInput } from "./FormInput";

describe("FormInput", () => {
  it("renders an input", () => {
    render(
      <FormInput placeholder="Company name" />
    );

    expect(
      screen.getByPlaceholderText("Company name")
    ).toBeInTheDocument();
  });

  it("renders a label", () => {
    render(
      <FormInput
        label="Company name"
        placeholder="Enter company name"
      />
    );

    expect(
      screen.getByText("Company name")
    ).toBeInTheDocument();
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();

    render(
      <FormInput placeholder="Company name" />
    );

    const input =
      screen.getByPlaceholderText("Company name");

    await user.type(input, "Example Ltd");

    expect(input).toHaveValue("Example Ltd");
  });

  it("renders an error", () => {
    render(
      <FormInput
        placeholder="Email"
        error="Invalid email"
      />
    );

    expect(
      screen.getByText("Invalid email")
    ).toBeInTheDocument();
  });
});