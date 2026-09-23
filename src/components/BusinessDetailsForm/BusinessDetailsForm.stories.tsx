import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {
  BusinessDetailsForm,
  type BusinessDetails,
} from "./BusinessDetailsForm";

const meta = {
  title: "Components/BusinessDetailsForm",
  component: BusinessDetailsForm,
  tags: ["autodocs"],
} satisfies Meta<typeof BusinessDetailsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const initialDetails: BusinessDetails = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  postcode: "",
};

export const Default: Story = {
  args: {
    value: initialDetails,
    onChange: () => {},
  },

  render: () => {
    const [details, setDetails] =
      useState<BusinessDetails>(initialDetails);

    return (
      <div className="max-w-xl">
        <BusinessDetailsForm
          value={details}
          onChange={setDetails}
          onAddAddressManually={() =>
            console.log("Add address manually")
          }
        />
      </div>
    );
  },
};

export const Prefilled: Story = {
  args: {
    value: initialDetails,
    onChange: () => {},
  },

  render: () => {
    const [details, setDetails] =
      useState<BusinessDetails>({
        companyName: "Example Ltd",
        contactName: "Jane Smith",
        email: "jane@example.com",
        phone: "01234 567890",
        postcode: "DE1 3FD",
      });

    return (
      <div className="max-w-xl">
        <BusinessDetailsForm
          value={details}
          onChange={setDetails}
        />
      </div>
    );
  },
};