import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Order now</Button>);

    expect(
      screen.getByRole("button", { name: "Order now" })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button onClick={onClick}>
        Order now
      </Button>
    );

    await user.click(
      screen.getByRole("button", { name: "Order now" })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders an icon", () => {
    render(
      <Button icon={<span data-testid="icon">↗</span>}>
        Order now
      </Button>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("accepts custom classes", () => {
    render(
      <Button className="custom-button">
        Order now
      </Button>
    );

    expect(
      screen.getByRole("button", { name: "Order now" })
    ).toHaveClass("custom-button");
  });
});