import { render, screen } from "@testing-library/react";

import { CardContainer } from "./CardContainer";

describe("CardContainer", () => {
  it("renders its children", () => {
    render(
      <CardContainer columns={3}>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </CardContainer>
    );

    expect(screen.getByText("Card 1")).toBeInTheDocument();
    expect(screen.getByText("Card 2")).toBeInTheDocument();
    expect(screen.getByText("Card 3")).toBeInTheDocument();
  });

  it("applies the correct three-column responsive classes", () => {
    const { container } = render(
      <CardContainer columns={3}>
        <div>Card</div>
      </CardContainer>
    );

    expect(container.firstChild).toHaveClass(
      "grid-cols-1",
      "md:grid-cols-2",
      "xl:grid-cols-3"
    );
  });

  it("accepts custom classes", () => {
    const { container } = render(
      <CardContainer
        columns={2}
        className="my-container"
      >
        <div>Card</div>
      </CardContainer>
    );

    expect(container.firstChild).toHaveClass("my-container");
  });
});