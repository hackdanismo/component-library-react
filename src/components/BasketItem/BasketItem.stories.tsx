import type { Meta, StoryObj } from "@storybook/react-vite";
import { BasketItem } from "./BasketItem";

const meta = {
  title: "Components/BasketItem",
  component: BasketItem,
  tags: ["autodocs"],
} satisfies Meta<typeof BasketItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SoGEA: Story = {
  args: {
    name: "SoGEA broadband",
    description: "Installed at DE1 3FD",
    connectionFee: 0,
    monthlyPrice: 24.95,
  },
};

export const WithConnectionFee: Story = {
  args: {
    name: "Ultrafast fibre",
    description: "Installed at DE1 3FD",
    connectionFee: 49.99,
    monthlyPrice: 26.95,
  },
};

export const Removable: Story = {
  args: {
    name: "SoGEA broadband",
    description: "Installed at DE1 3FD",
    connectionFee: 0,
    monthlyPrice: 24.95,
    onRemove: () => console.log("Remove package"),
  },
};