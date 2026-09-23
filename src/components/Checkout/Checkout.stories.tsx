import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkout } from "./Checkout";

import type { BusinessDetails } from "../BusinessDetailsForm/BusinessDetailsForm";
import type { PaymentMethod } from "../PaymentMethodSelector/PaymentMethodSelector";

const meta = {
  title: "Components/Checkout",
  component: Checkout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Checkout>;

export default meta;

type Story = StoryObj<typeof meta>;

const sogeaPackage = {
  id: "sogea",
  name: "SoGEA broadband",
  connectionFee: 0,
  monthlyPrice: 24.95,
  description: "Installed at DE1 3FD",
};

const initialDetails: BusinessDetails = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  postcode: "",
};

export const SoGEACheckout: Story = {
  args: {
    package: sogeaPackage,
    businessDetails: initialDetails,
    onBusinessDetailsChange: () => {},
  },

  render: () => {
    const [details, setDetails] =
      useState<BusinessDetails>(initialDetails);

    const [paymentMethod, setPaymentMethod] =
      useState<PaymentMethod>();

    return (
      <div className="min-h-screen bg-[#f5f6fa] p-6 md:p-10">
        <Checkout
          package={sogeaPackage}
          businessDetails={details}
          onBusinessDetailsChange={setDetails}
          paymentMethod={paymentMethod}
          onPaymentMethodChange={setPaymentMethod}
          onAddAddressManually={() =>
            console.log("Add address manually")
          }
          onRemovePackage={() =>
            console.log("Remove package")
          }
        />
      </div>
    );
  },
};