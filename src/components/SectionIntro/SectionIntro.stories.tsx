// src/components/SectionIntro/SectionIntro.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { SectionIntro } from "./SectionIntro";

const meta: Meta<typeof SectionIntro> = {
  title: "Components/SectionIntro",
  component: SectionIntro,
};

export default meta;

type Story = StoryObj<typeof SectionIntro>;

export const BusinessBroadband: Story = {
  args: {
    title: "Business Broadband",
    subtitle:
      "Choosing the right type of internet broadband to support your business...",
    description:
      "Our fast and reliable connections keep you operating at all times. And when it comes to connectivity, the faster the better right?",
    secondaryDescription:
      "Our team of business broadband specialists are here to deliver the right network and internet solutions for your business.",
  },
};