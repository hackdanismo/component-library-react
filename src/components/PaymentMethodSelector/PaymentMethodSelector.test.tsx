import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PaymentMethodSelector } from "./PaymentMethodSelector";

describe("PaymentMethodSelector", () => {
  it("renders payment methods", () => {
    render(<PaymentMethodSelector />);

    expect(
      screen.getByRole("button", { name: "Link" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Pay/ })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Card")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Bank")
    ).toBeInTheDocument();
  });

  it("returns card when card is selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <PaymentMethodSelector
        onChange={onChange}
      />
    );

    await user.click(
      screen.getByText("Card")
    );

    expect(onChange).toHaveBeenCalledWith("card");
  });

  it("returns bank when bank is selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <PaymentMethodSelector
        onChange={onChange}
      />
    );

    await user.click(
      screen.getByText("Bank")
    );

    expect(onChange).toHaveBeenCalledWith("bank");
  });
});