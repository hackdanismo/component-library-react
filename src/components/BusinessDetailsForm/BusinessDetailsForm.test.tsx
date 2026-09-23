import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  BusinessDetailsForm,
  type BusinessDetails,
} from "./BusinessDetailsForm";

const details: BusinessDetails = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  postcode: "",
};

describe("BusinessDetailsForm", () => {
  it("renders all business detail fields", () => {
    render(
      <BusinessDetailsForm
        value={details}
        onChange={() => {}}
      />
    );

    expect(
      screen.getByPlaceholderText("*Company name")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("*Contact name")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("*Email address")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("*Contact Number")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(
        "*Business address postcode"
      )
    ).toBeInTheDocument();
  });

  it("emits updated values", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <BusinessDetailsForm
        value={details}
        onChange={onChange}
      />
    );

    await user.type(
      screen.getByPlaceholderText("*Company name"),
      "A"
    );

    expect(onChange).toHaveBeenCalledWith({
      ...details,
      companyName: "A",
    });
  });

  it("calls add address manually", async () => {
    const user = userEvent.setup();
    const onAddAddressManually = vi.fn();

    render(
      <BusinessDetailsForm
        value={details}
        onChange={() => {}}
        onAddAddressManually={onAddAddressManually}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /add address manually/i,
      })
    );

    expect(onAddAddressManually).toHaveBeenCalledTimes(1);
  });
});