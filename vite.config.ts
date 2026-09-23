/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

import { fileURLToPath, URL } from "node:url";
import path from "node:path";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    dts({
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: fileURLToPath(
        new URL("./src/index.ts", import.meta.url)
      ),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },

  test: {
    projects: [
      // ---------------------------------------
      // Component / unit tests
      // ---------------------------------------
      {
        extends: true,

        test: {
          name: "unit",

          environment: "jsdom",

          globals: true,

          setupFiles: [
            "./src/test/setup.ts",
          ],

          include: [
            "src/**/*.test.{ts,tsx}",
          ],
        },
      },

      // ---------------------------------------
      // Storybook tests
      // ---------------------------------------
      {
        extends: true,

        plugins: [
          storybookTest({
            configDir: path.join(
              dirname,
              ".storybook"
            ),
          }),
        ],

        test: {
          name: "storybook",

          browser: {
            enabled: true,
            headless: true,

            provider: playwright({}),

            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});