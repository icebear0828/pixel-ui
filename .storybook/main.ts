import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // 项目的 vite.config.ts 中包含 vite-plugin-singlefile（用于生成单文件应用），
    // Storybook 需要多文件产物，因此在此移除该插件。
    config.plugins = (config.plugins ?? [])
      .flat()
      .filter((plugin) => {
        const name = (plugin as { name?: string } | undefined)?.name ?? "";
        return !!plugin && !name.includes("singlefile");
      });
    return config;
  },
};

export default config;
