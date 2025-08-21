import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: "#023047" },
        },
        secondary: {
          DEFAULT: { value: "#FB8500" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
