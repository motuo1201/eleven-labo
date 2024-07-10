import { Formation } from "@/components/Formation";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/Formation",
  component: Formation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    formation: { control: "text" },
    style: { control: "object" },
  },
  args: {
    formation: "4-3-3",
    style: {
      height: "35rem",
      position: "relative",
      width: "35rem",
    },
  },
} satisfies Meta<typeof Formation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FourThreeThree: Story = {
  name: "4-3-3",
  args: {
    formation: "4-3-3",
  },
};

export const FourFourTwo: Story = {
  name: "4-4-2",
  args: {
    formation: "4-4-2",
  },
};

export const ThreeFourThree: Story = {
  name: "3-4-3",
  args: {
    formation: "3-4-3",
  },
};