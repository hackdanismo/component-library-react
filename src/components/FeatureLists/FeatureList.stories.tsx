import type { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./FeatureList";

const meta: Meta<typeof FeatureList> = {
  title: "Components/FeatureList",
  component: FeatureList,
  parameters: {
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

type Story = StoryObj<typeof FeatureList>;

export const ADSLFeatures: Story = {
  args: {
    title: "ADSL FEATURES",
    features: [
      {
        id: "download-speed",
        label: "Download speed up to 20Mbps",
        highlighted: true,
      },
      {
        id: "low-cost",
        label: "Low cost service",
      },
      {
        id: "coverage",
        label: "Over 99% UK coverage",
      },
    ],
  },
};

export const SoGEAFeatures: Story = {
  args: {
    title: "SoGEA FEATURES",
    features: [
      {
        id: "download-speed",
        label: "Download speed up to 80Mbps",
        highlighted: true,
      },
      {
        id: "cabinet",
        label: "Fibre to the cabinet",
      },
      {
        id: "coverage",
        label: "95% UK coverage",
      },
    ],
  },
};

export const UltrafastFibreFeatures: Story = {
  args: {
    title: "ULTRAFAST FIBRE FEATURES",
    features: [
      {
        id: "download-speed",
        label: "Download speed up to 1Gbps",
        highlighted: true,
      },
      {
        id: "dedicated-fibre",
        label: "Dedicated fibre to the premises",
      },
      {
        id: "fastest",
        label: "Fastest broadband available",
      },
    ],
  },
};