import { render } from "@testing-library/react";

import { WifiIcon } from "./WifiIcon";

describe("WifiIcon", () => {
  it("renders an svg", () => {
    const { container } = render(<WifiIcon />);

    expect(
      container.querySelector("svg")
    ).toBeInTheDocument();
  });
});