import type { Preview } from "@storybook/react-vite";
import "../src/ui/pixel.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    docs: {
      story: { inline: true },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <div className="px-stage">
        <Story />
      </div>
    ),
  ],
};

export default preview;
