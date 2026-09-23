import { render, screen } from "@testing-library/react";

import { Checkout } from "./Checkout";

describe("Checkout", () => {
  const selectedPackage = {
    id: "sogea",
    name: "SoGEA broadband",
    connectionFee: 0,
    monthlyPrice: 24.95,
    description: "Installed at DE1 3FD",
  };

  const details = {
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    postcode: "",
  };

  it("renders checkout content", () => {
    render(
      <Checkout
        package={selectedPackage}
        businessDetails={details}
        onBusinessDetailsChange={() => {}}
      />
    );

    expect(
      screen.getByText("SoGEA broadband")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Your business details",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "In your basket",
      })
    ).toBeInTheDocument();
  });
});