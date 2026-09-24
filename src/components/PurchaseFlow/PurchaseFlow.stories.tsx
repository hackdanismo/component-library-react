import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { PurchaseFlow } from "./PurchaseFlow";

const meta = {
  title: "Components/PurchaseFlow",
  component: PurchaseFlow,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PurchaseFlow>;

export default meta;

type Story = StoryObj<typeof meta>;

const packages = [
  {
    id: "adsl",
    name: "ADSL broadband",
    title: "ADSL",
    accentText: "broadband",
    connectionFee: 0,
    monthlyPrice: 9.99,
    secondaryActionLabel: "More about ADSL",
    description: "Installed at DE1 3FD",
    featuresTitle: "ADSL FEATURES",
    features: [
      {
        id: "speed",
        label: "Download speed up to 20Mbps",
        highlighted: true,
      },
      {
        id: "cost",
        label: "Low cost service",
      },
      {
        id: "coverage",
        label: "Over 99% UK coverage",
      },
    ],
  },
  {
    id: "sogea",
    name: "SoGEA broadband",
    title: "SoGEA",
    accentText: "broadband",
    connectionFee: 0,
    monthlyPrice: 24.95,
    secondaryActionLabel: "More about SoGEA",
    description: "Installed at DE1 3FD",
    featuresTitle: "SoGEA FEATURES",
    features: [
      {
        id: "speed",
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
  {
    id: "ultrafast",
    name: "Ultrafast fibre",
    title: "Ultrafast fibre",
    connectionFee: 0,
    monthlyPrice: 26.95,
    secondaryActionLabel: "Find out more",
    description: "Installed at DE1 3FD",
    featuresTitle: "ULTRAFAST FIBRE FEATURES",
    features: [
      {
        id: "speed",
        label: "Download speed up to 1Gbps",
        highlighted: true,
      },
      {
        id: "dedicated",
        label: "Dedicated fibre to the premises",
      },
      {
        id: "fastest",
        label: "Fastest broadband available",
      },
    ],
  },
];

export const Default: Story = {
  args: {
    packages,
    columns: 3,
  },

  render: (args) => (
    <div className="min-h-screen bg-[#f5f6fa] p-6 md:p-10">
      <PurchaseFlow {...args} />
    </div>
  ),
};

export const CustomCtas: Story = {
  args: {
    packages: [
      {
        ...packages[0],
        secondaryActionLabel: "Check ADSL availability",
      },
      {
        ...packages[1],
        secondaryActionLabel: "Learn about SoGEA",
      },
      {
        ...packages[2],
        secondaryActionLabel: "Explore ultrafast fibre",
      },
    ],
    columns: 3,
  },

  render: (args) => (
    <div className="min-h-screen bg-[#f5f6fa] p-6 md:p-10">
      <PurchaseFlow {...args} />
    </div>
  ),
};