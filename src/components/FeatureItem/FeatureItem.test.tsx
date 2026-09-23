import { render, screen } from "@testing-library/react";

import { FeatureItem } from "./FeatureItem";

describe("FeatureItem", () => {
  it("renders the feature label", () => {
    render(
      <FeatureItem label="Low cost service" />
    );

    expect(
      screen.getByText("Low cost service")
    ).toBeInTheDocument();
  });

  it("applies highlighted styling", () => {
    render(
      <FeatureItem
        label="Download speed up to 80Mbps"
        highlighted
      />
    );

    expect(
      screen.getByText("Download speed up to 80Mbps")
    ).toHaveClass("font-semibold");
  });

  it("accepts custom classes", () => {
    const { container } = render(
      <FeatureItem
        label="Feature"
        className="my-feature"
      />
    );

    expect(container.firstChild).toHaveClass("my-feature");
  });
});