import { render, screen } from "@testing-library/react";

import { CheckoutHeader } from "./CheckoutHeader";

describe("CheckoutHeader", () => {
  it("renders the selected package", () => {
    render(
      <CheckoutHeader packageName="SoGEA broadband" />
    );

    expect(
      screen.getByText("SoGEA broadband")
    ).toBeInTheDocument();
  });
});