import { ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from ".";

export default {
  title: "Header",
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Header>;

export const Basic = () => <Header />;
