import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Card } from "./Card";

describe("Card", () => {
  it("renders card content", () => {
    render(
      <Card
        title="ADSL"
        price="£9.99/mth"
        featuresTitle="ADSL FEATURES"
        features={[
          { label: "Low cost service" },
        ]}
      />
    );

    expect(
      screen.getByRole("heading", { name: "ADSL" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Low cost service")
    ).toBeInTheDocument();
  });

  it("calls the primary action", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Card
        title="ADSL"
        price="£9.99/mth"
        primaryAction={{
          label: "Order now",
          onClick,
        }}
      />
    );

    await user.click(
      screen.getByRole("button", { name: "Order now" })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders the secondary action", () => {
    render(
      <Card
        title="ADSL"
        price="£9.99/mth"
        secondaryAction={{
          label: "Explore ADSL",
        }}
      />
    );

    expect(
      screen.getByRole("button", {
        name: "Explore ADSL",
      })
    ).toBeInTheDocument();
  });
});