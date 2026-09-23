import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PurchaseFlow } from "./PurchaseFlow";

const packages = [
  {
    id: "adsl",
    name: "ADSL broadband",
    title: "ADSL",
    accentText: "broadband",
    connectionFee: 0,
    monthlyPrice: 9.99,
    featuresTitle: "ADSL FEATURES",
    features: [
      {
        label: "Low cost service",
      },
    ],
  },
  {
    id: "sogea",
    name: "SoGEA broadband",
    title: "SoGEA",
    accentText: "broadband",
    connectionFee: 0,
    monthlyPrice: 24.95,
    featuresTitle: "SoGEA FEATURES",
    features: [
      {
        label: "Fibre to the cabinet",
      },
    ],
  },
];

describe("PurchaseFlow", () => {
  it("renders package cards initially", () => {
    render(
      <PurchaseFlow
        packages={packages}
        columns={2}
      />
    );

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /ADSL broadband/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /SoGEA broadband/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("button", {
        name: /order now/i,
      })
    ).toHaveLength(2);
  });

  it("transitions to checkout when a package is selected", async () => {
    const user = userEvent.setup();

    render(
      <PurchaseFlow
        packages={packages}
        columns={2}
      />
    );

    const orderButtons = screen.getAllByRole(
      "button",
      {
        name: /order now/i,
      }
    );

    expect(orderButtons).toHaveLength(2);

    await user.click(orderButtons[1]);

    expect(
      screen.getByRole("heading", {
        name: /you have selected SoGEA broadband/i,
      })
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

    expect(
      screen.queryByRole("button", {
        name: /order now/i,
      })
    ).not.toBeInTheDocument();
  });
});