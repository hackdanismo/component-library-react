import { render, screen } from "@testing-library/react";

import { FeatureList } from "./FeatureList";

describe("FeatureList", () => {
  it("renders the title", () => {
    render(
      <FeatureList
        title="ADSL FEATURES"
        features={[]}
      />
    );

    expect(
      screen.getByText("ADSL FEATURES")
    ).toBeInTheDocument();
  });

  it("renders all supplied features", () => {
    render(
      <FeatureList
        features={[
          { label: "Feature one" },
          { label: "Feature two" },
          { label: "Feature three" },
        ]}
      />
    );

    expect(screen.getByText("Feature one")).toBeInTheDocument();
    expect(screen.getByText("Feature two")).toBeInTheDocument();
    expect(screen.getByText("Feature three")).toBeInTheDocument();
  });

  it("renders placeholder slots up to maxItems", () => {
    render(
      <FeatureList
        features={[
          { label: "Feature one" },
          { label: "Feature two" },
          { label: "Feature three" },
        ]}
        maxItems={5}
      />
    );

    const placeholders =
      screen.getAllByTestId("feature-placeholder");

    expect(placeholders).toHaveLength(2);
  });

  it("does not render placeholders when features exceed maxItems", () => {
    render(
      <FeatureList
        maxItems={2}
        features={[
          { label: "One" },
          { label: "Two" },
          { label: "Three" },
        ]}
      />
    );

    const placeholders =
      screen.queryAllByTestId("feature-placeholder");

    expect(placeholders).toHaveLength(0);
  });
});