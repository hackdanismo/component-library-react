import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { BasketSummary } from "./BasketSummary";
import type { PaymentMethod } from "../PaymentMethodSelector/PaymentMethodSelector";

const meta = {
  title: "Components/BasketSummary",
  component: BasketSummary,
  tags: ["autodocs"],
} satisfies Meta<typeof BasketSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

const sogeaPackage = {
  id: "sogea",
  name: "SoGEA broadband",
  connectionFee: 0,
  monthlyPrice: 24.95,
  description: "Installed at DE1 3FD",
};

export const Default: Story = {
  args: {
    package: sogeaPackage,
  },

  render: () => {
    const [paymentMethod, setPaymentMethod] =
      useState<PaymentMethod>();

    return (
      <div className="max-w-xl">
        <BasketSummary
          package={sogeaPackage}
          paymentMethod={paymentMethod}
          onPaymentMethodChange={setPaymentMethod}
          onRemove={() =>
            console.log("Remove selected package")
          }
        />
      </div>
    );
  },
};