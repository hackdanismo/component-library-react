import type { Meta, StoryObj } from "@storybook/react";
import { CheckoutHeader } from "./CheckoutHeader";

const meta = {
  title: "Components/CheckoutHeader",
  component: CheckoutHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckoutHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SoGEA: Story = {
  args: {
    packageName: "SoGEA broadband",
  },
};

export const ADSL: Story = {
  args: {
    packageName: "ADSL broadband",
  },
};

export const UltrafastFibre: Story = {
  args: {
    packageName: "Ultrafast fibre",
  },
};