import { render, screen } from "@testing-library/react";

import { SectionIntro } from "./SectionIntro";

describe("SectionIntro", () => {
  it("renders the title", () => {
    render(
      <SectionIntro title="Business Broadband" />
    );

    expect(
      screen.getByRole("heading", {
        name: "Business Broadband",
      })
    ).toBeInTheDocument();
  });

  it("renders optional content", () => {
    render(
      <SectionIntro
        title="Business Broadband"
        subtitle="Choose the right connection"
        description="Fast and reliable connections."
        secondaryDescription="Talk to our team."
      />
    );

    expect(
      screen.getByText("Choose the right connection")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Fast and reliable connections.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Talk to our team.")
    ).toBeInTheDocument();
  });
});