import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./FormInput";

const meta = {
  title: "Components/FormInput",
  component: FormInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Company name",
  },
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Email address",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Company name",
    placeholder: "Enter company name",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Email address",
    error: "Please enter a valid email address",
  },
};