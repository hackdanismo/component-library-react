import type { Meta, StoryObj } from "@storybook/react";
import { CardContainer } from "./CardContainer";

const meta: Meta<typeof CardContainer> = {
  title: "Components/CardContainer",
  component: CardContainer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardContainer>;

function DemoCard({ label }: { label: string }) {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-2xl bg-[#080b25] p-6 text-white">
      {label}
    </div>
  );
}

export const OneColumn: Story = {
  args: {
    columns: 1,
  },
  render: (args) => (
    <CardContainer {...args}>
      <DemoCard label="Card 1" />
    </CardContainer>
  ),
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
  render: (args) => (
    <CardContainer {...args}>
      <DemoCard label="Card 1" />
      <DemoCard label="Card 2" />
    </CardContainer>
  ),
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
  },
  render: (args) => (
    <CardContainer {...args}>
      <DemoCard label="Card 1" />
      <DemoCard label="Card 2" />
      <DemoCard label="Card 3" />
    </CardContainer>
  ),
};

export const FourColumns: Story = {
  args: {
    columns: 4,
  },
  render: (args) => (
    <CardContainer {...args}>
      <DemoCard label="Card 1" />
      <DemoCard label="Card 2" />
      <DemoCard label="Card 3" />
      <DemoCard label="Card 4" />
    </CardContainer>
  ),
};