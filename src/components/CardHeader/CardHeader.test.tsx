import { render, screen } from "@testing-library/react";

import { CardHeader } from "./CardHeader";

describe("CardHeader", () => {
  it("renders title and price", () => {
    render(
      <CardHeader
        title="ADSL"
        price="£9.99/mth"
      />
    );

    expect(
      screen.getByRole("heading", { name: "ADSL" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("from £9.99/mth")
    ).toBeInTheDocument();
  });

  it("renders accent text", () => {
    render(
      <CardHeader
        title="ADSL"
        accentText="broadband"
        price="£9.99/mth"
      />
    );

    expect(
      screen.getByText("broadband")
    ).toBeInTheDocument();
  });

  it("renders an icon", () => {
    render(
      <CardHeader
        icon={<span data-testid="icon">icon</span>}
        title="ADSL"
        price="£9.99/mth"
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});