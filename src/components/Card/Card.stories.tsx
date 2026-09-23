import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { WifiIcon } from "../WifiIcon/WifiIcon";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ADSL: Story = {
  args: {
    icon: <WifiIcon />,
    title: "ADSL",
    accentText: "broadband",
    price: "£9.99/mth",
    featuresTitle: "ADSL FEATURES",

    features: [
      {
        label: "Download speed up to 20Mbps",
        highlighted: true,
      },
      {
        label: "Low cost service",
      },
      {
        label: "Over 99% UK coverage",
      },
    ],

    primaryAction: {
      label: "Order now",
      icon: "↗",
    },

    secondaryAction: {
      label: "Explore ADSL",
      icon: "↗",
    },
  },
};