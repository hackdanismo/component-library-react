import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BasketItem } from "./BasketItem";

describe("BasketItem", () => {
  it("renders package information", () => {
    render(
      <BasketItem
        name="SoGEA broadband"
        description="Installed at DE1 3FD"
        connectionFee={0}
        monthlyPrice={24.95}
      />
    );

    expect(
      screen.getByText(/SoGEA broadband/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Installed at DE1 3FD/)
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("£24.95")
    ).toHaveLength(2);
  });

  it("shows a free connection message", () => {
    render(
      <BasketItem
        name="SoGEA broadband"
        connectionFee={0}
        monthlyPrice={24.95}
      />
    );

    expect(
      screen.getByText(/Free connection/)
    ).toBeInTheDocument();
  });

  it("calls onRemove", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(
      <BasketItem
        name="SoGEA broadband"
        connectionFee={0}
        monthlyPrice={24.95}
        onRemove={onRemove}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: "Remove SoGEA broadband",
      })
    );

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});