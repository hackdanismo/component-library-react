// src/components/CardHeader/CardHeader.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { CardHeader } from "./CardHeader";
import { WifiIcon } from "../WifiIcon/WifiIcon";

const meta: Meta<typeof CardHeader> = {
  title: "Components/CardHeader",
  component: CardHeader,
};

export default meta;

type Story = StoryObj<typeof CardHeader>;

export const ADSL: Story = {
  args: {
    icon: <WifiIcon />,
    title: "ADSL",
    accentText: "broadband",
    price: "£9.99/mth",
  },
};

export const SoGEA: Story = {
  args: {
    icon: <WifiIcon />,
    title: "SoGEA",
    accentText: "broadband",
    price: "£24.95/mth",
  },
};

export const UltrafastFibre: Story = {
  args: {
    icon: <WifiIcon />,
    title: "Ultrafast fibre",
    price: "£26.95/mth",
  },
};