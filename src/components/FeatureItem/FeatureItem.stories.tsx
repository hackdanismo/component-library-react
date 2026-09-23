import type { Meta, StoryObj } from "@storybook/react";
import { FeatureItem } from "./FeatureItem";

const meta: Meta<typeof FeatureItem> = {
  title: "Components/FeatureItem",
  component: FeatureItem,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#080b25",
        },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureItem>;

export const Default: Story = {
  args: {
    label: "Low cost service",
  },
};

export const Highlighted: Story = {
  args: {
    label: "Download speed up to 20Mbps",
    highlighted: true,
  },
};