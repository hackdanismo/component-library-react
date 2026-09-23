import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Order now",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Explore ADSL",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Order now",
    variant: "primary",
    icon: "↗",
  },
};