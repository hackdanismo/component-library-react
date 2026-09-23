import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import {
  PaymentMethodSelector,
  type PaymentMethod,
} from "./PaymentMethodSelector";

const meta = {
  title: "Components/PaymentMethodSelector",
  component: PaymentMethodSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof PaymentMethodSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] =
      useState<PaymentMethod>();

    return (
      <div className="max-w-lg">
        <PaymentMethodSelector
          value={paymentMethod}
          onChange={setPaymentMethod}
        />
      </div>
    );
  },
};

export const CardSelected: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] =
      useState<PaymentMethod>("card");

    return (
      <div className="max-w-lg">
        <PaymentMethodSelector
          value={paymentMethod}
          onChange={setPaymentMethod}
        />
      </div>
    );
  },
};