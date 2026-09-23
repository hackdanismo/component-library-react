import { render, screen } from "@testing-library/react";

import { BasketSummary } from "./BasketSummary";

describe("BasketSummary", () => {
  const selectedPackage = {
    id: "sogea",
    name: "SoGEA broadband",
    connectionFee: 0,
    monthlyPrice: 24.95,
    description: "Installed at DE1 3FD",
  };

  it("renders the selected package", () => {
    render(
      <BasketSummary
        package={selectedPackage}
      />
    );

    expect(
      screen.getByText(/SoGEA broadband/)
    ).toBeInTheDocument();
  });

  it("renders the basket heading", () => {
    render(
      <BasketSummary
        package={selectedPackage}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: "In your basket",
      })
    ).toBeInTheDocument();
  });
});