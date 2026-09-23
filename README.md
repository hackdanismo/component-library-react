# Component Library: React
An open-source `React` component library written in `TypeScript` and released under the `MIT licence`.

Tech stack:

- `React`
- `TypeScript`
- `Tailwind CSS`
- `ESLint`
- `Vitest`
- `React Testing Library`

## Import the Library
To import the library and select components to be included, firstly install the `npm` package.

```shell
# Change directory into your project
$ cd your-project
# Run the install command to import the component library
$ npm install @hackdanismo/component-library-react
```

`NPM` page: [https://www.npmjs.com/package/@hackdanismo/component-library-react](https://www.npmjs.com/package/@hackdanismo/component-library-react).

Once installed, this will be added to the `node_modules` folder in your project. The `node_modules` should be added to a `.gitignore` file to prevent it being added to version control.

Import the CSS and components required:

```typescript
import "@hackdanismo/component-library-react/component-library-react.css";
import { Button } from "@hackdanismo/component-library-react";
```

## Set the Node version
Within the project root there is a configuration file named `.nvmrc`. `Node Version Manager` is used to manage `Node` versions. Once `NVM` is installed, use the following terminal commands to install and use the `Node` version when inside the project folder:

```shell
# Change directory to the component library project folder
$ cd component-library-react
# Install the recommended Node version
$ nvm install
# Use the Node version
$ nvm use
```

To install `NVM`:

```shell
# Install using cURL
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
# Install using Wget
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
```

## NPM Package
To set the component library to be an `npm` package, we must first update the `package.json` file. The current `package.json` file is this:

```json
{
  "name": "component-library-react",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit -p tsconfig.build.json && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",

    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  },
  "dependencies": {
    "react": "^19.2.8",
    "react-dom": "^19.2.8"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "latest",
    "@eslint/js": "^10.0.1",
    "@storybook/addon-a11y": "^10.6.0",
    "@storybook/addon-docs": "^10.6.0",
    "@storybook/addon-onboarding": "^10.6.0",
    "@storybook/addon-vitest": "^10.6.0",
    "@storybook/react-vite": "^10.6.0",
    "@tailwindcss/vite": "^4.3.3",
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.3",
    "@testing-library/user-event": "^14.6.7",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "@vitest/browser-playwright": "latest",
    "@vitest/coverage-v8": "latest",
    "eslint": "^10.11.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.7",
    "eslint-plugin-storybook": "^10.6.0",
    "globals": "^17.12.0",
    "jsdom": "^30.1.1",
    "playwright": "latest",
    "storybook": "^10.6.0",
    "tailwindcss": "^4.3.3",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.70.1",
    "vite": "^8.3.0",
    "vite-plugin-dts": "^5.1.1",
    "vitest": "^4.1.11"
  }
}
```

Change to this:

```json
{
  "name": "@hackdanismo/component-library-react",
  "version": "0.1.0",
  "type": "module",

  "main": "./dist/index.cjs.js",
  "module": "./dist/index.es.js",
  "types": "./dist/index.d.ts",

  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.es.js",
      "require": "./dist/index.cjs.js"
    },
    "./style.css": "./dist/component-library-react.css"
  },

  "files": [
    "dist"
  ],

  "sideEffects": [
    "**/*.css"
  ],

  "publishConfig": {
    "access": "public"
  },

  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit -p tsconfig.build.json && vite build",
    "preview": "vite preview",

    "lint": "eslint .",
    "lint:fix": "eslint . --fix",

    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",

    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",

    "prepublishOnly": "npm run build"
  },

  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  },

  "devDependencies": {
    "@chromatic-com/storybook": "latest",
    "@eslint/js": "^10.0.1",
    "@storybook/addon-a11y": "^10.6.0",
    "@storybook/addon-docs": "^10.6.0",
    "@storybook/addon-onboarding": "^10.6.0",
    "@storybook/addon-vitest": "^10.6.0",
    "@storybook/react-vite": "^10.6.0",
    "@tailwindcss/vite": "^4.3.3",
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.3",
    "@testing-library/user-event": "^14.6.7",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "@vitest/browser-playwright": "4.1.11",
    "@vitest/coverage-v8": "4.1.11",
    "eslint": "^10.11.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.7",
    "eslint-plugin-storybook": "^10.6.0",
    "globals": "^17.12.0",
    "jsdom": "^30.1.1",
    "playwright": "latest",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "storybook": "^10.6.0",
    "tailwindcss": "^4.3.3",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.70.1",
    "vite": "^8.3.0",
    "vite-plugin-dts": "^5.1.1",
    "vitest": "4.1.11"
  }
}
```

Test the package before publishing:

```shell
$ npm run lint
$ npm run test:run
$ npm run build
```

Then, create a Tarball `.tgz` file to show the package is packed:

```shell
$ npm pack
```

Inspect it with:

```shell
$ tar -tf hackdanismo-component-library-react-0.1.0.tgz
```

Should see:

```shell
package/LICENSE
package/dist/component-library-react.css
package/dist/index.cjs.js
package/dist/index.es.js
package/package.json
package/README.md
package/dist/index.d.ts
```

To test the package locally:

```shell
$ npm install ../component-library-react/your-package-0.1.0.tgz
```

Log onto `npm`:

```shell
$ npm login
```

Apply Access Token:

```shell
$ npm config set //registry.npmjs.org/:_authToken=YOUR_TOKEN
```

Check:

```shell
$ npm whoami
```

Publish the package to the `npm` registry:

```shell
$ npm publish
```

Within the `package.json`, we don't need to repeat: `--access public` because of this:

```json
"publishConfig": {
    "access": "public"
},
```

It is worth setting up `2FA` to publish a package to the `npm` registry.

## Clone the Repository
Inside of `GitHub`, the code repository containing the source code can be cloned here:

```shell
# Clone using HTTPS
$ git clone https://github.com/hackdanismo/component-library-react.git
# Clone using SSH
$ git clone git@github.com:hackdanismo/component-library-react.git
```

Once cloned, setup the project locally:

```shell
# Change directory to the project folder
$ cd component-library-react
# Install the packages and dependencies listed in package.json using npm
$ npm install

# (Optional) Install the Node version using nvm (if installed)
$ nvm install
# (Optional) Use the Node version using nvm (if installed)
$ nvm use

# Run the local development server
$ npm run dev
# Run Storybook
$ npm run storybook

# Run ESLint
$ npm run lint
# Run the unit tests for each component
$ npm run test
# Check the build passes and no errors are showing
$ npm run build
```

Once changes are made, it is good practice to bump the project version number before deploying the package to `npm`:

```shell
# Bumps the version to x.0.0
$ npm version major
# Bumps the version to 0.x.0
$ npm version minor
# Bumps the version to 0.0.x
$ npm version patch
```

The version will be listed in the `package.json` file.

Check for outdated packages/dependencies:

```shell
$ npm outdated
```

## Development
The component library uses `Vite`. To create the project, open the terminal and enter the following command to create the application structure and scaffold:

```shell
$ npm create vite@latest my-component-library -- --template react-ts
```

Once completed, run the following terminal commands:

```shell
# Change directory to the component library project folder
$ cd component-library-react
# Install dependencies and required packages
$ npm install
```

Remove all files from inside the `src` folder as this will contain the reusable `React` components. The `src` folder should look something like this:

```
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       └── Button.css
└── index.ts
```

The `src/index.ts` file becomes the entry point to the library. 

```typescript
export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";
```

Ensure the `vite.config.ts` points to `src/index.ts` rather than the normal `Vite` app entry point.

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
```

A declaration plugin will also be needed:

```shell
$ npm install -D vite-plugin-dts
```

Once these changes have been made, run the `build` command and `Vite` will build the library into `dist/` instead of trying to build a normal React application from `index.html`.

```shell
$ npm run build
```

### Setup Tailwind
Install `Tailwind` as a package using `NPM`:

```shell
$ npm install -D tailwindcss @tailwindcss/vite
```

Once installed, update the `vite.config.ts` configuration file to include `Tailwind`:

```typescript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath, URL } from "node:url";

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
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
```

Within the `src` folder, add a file named `styles.css`:

```css
/* src/styles.css */

@import "tailwindcss";
```

Within the `src/index.ts` file, import `Tailwind` within the library entry point:

```typescript
import "./styles.css";

export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";
```

Now components can contain normal `Tailwind` classes.

When we build the library, `Vite` should emit `CSS` alongside the `JavaScript` bundle, for example:

```
dist/
├── index.es.js
├── index.cjs.js
├── index.es.d.ts
└── component-library-react.css
```

It is recommended to compile `Tailwind` inside the component library and ship the generated `CSS` rather than requiring each application that installs the component library to have to configure `Tailwind`.

### Components
All reusable `React` components can be found here: `src/components`.

Here is an example of a `Button` component written in `TypeScript` and found here: `src/components/Button/Button.tsx`:

```typescript
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps 
extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "outline";
    icon?: ReactNode;
}

export function Button({
    children,
    variant = "primary",
    icon,
    className = "",
    ...props
}: ButtonProps) {
    const baseClasses = "inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 font-semibold transition";
    const variantClasses = {
        primary: "bg-cyan-400 text-white hover:brightness-105",
        outline: "border border-cyan-400 bg-transparent text-white hover:bg-white/5",
    };

    return (
        <button
            className={`
                ${baseClasses}
                ${variantClasses[variant]}
                ${className}
            `}
            {...props}
        >
            {children}

            {icon && (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                {icon}
                </span>
            )}
        </button>
    )
}
```

When a component is created, it is exported to the `src/index.ts` file:

```typescript
// src/index.ts

export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";
```

The component can then be used in an application once the component library has been imported:

```typescript
import { Button } from "@hackdanismo/component-library-react";

<Button variant="primary">Order now</Button>
```

The component extends:

```typescript
ButtonHTMLAttributes<HTMLButtonElement>
```

So, we can automatically pass normal button props like:

```html
<Button
  type="button"
  disabled
  onClick={() => console.log("clicked")}
  aria-label="Order broadband"
>
  Order now
</Button>
```

`Tailwind` can also be used:

```html
<Button className="w-full mt-4">
  Order now
</Button>
```

Or, custom classes:

```html
<Button className="my-special-button">
  Order now
</Button>
```

After adding a new component to `src/index.ts`, which allows consumers of the `NPM` package can import individual components, run the `build` command as this will catch any missing exports or incorrect paths before the package is published.

```shell
$ npm run build
```

### Storybook
`Storybook` allows us to see each component render in isolation without needing a separate app. From inside the component library, run:

```shell
$ npx storybook@latest init
```

`Storybook` will detect the `Vite/React` setup and add the required scripts and files needed. This should generate a `.storybook` folder in the project root.

Within the `components` folder, add a `.stories.tsx` file for each component. Here is the `src/components/Button/Button.stories.tsx` file for the `Button` component.

```typescript
// src/components/Button/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Order now",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Explore ADSL",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Order now",
    variant: "primary",
    icon: "↗",
  },
};
```

To start `Storybook`:

```shell
$ npm run storybook
```

This should open here: [http://localhost:6006](http://localhost:6006)

`Storybook` needs to load the same `Tailwind CSS` used by the component library. Within the `.storybook/preview.ts` file, add a link to the `src/styles.css` file from the component library.

```typescript
import type { Preview } from '@storybook/react-vite'

// Import the styles and Tailwind CSS from the component library into Storybook
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
```

To remove the default components that `Storybook` adds, update the `.storybook/main.ts` file from:

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite"
};
export default config;
```

To this:

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  framework: "@storybook/react-vite"
};

export default config;
```

To set dark mode in `Storybook`, update the `.storybook/preview.tsx` file:

```typescript
import type { Preview } from '@storybook/react-vite'

// Import the styles and Tailwind CSS from the component library into Storybook
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#080b25",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
```

It is also worth removing the default `src/stories` folder generated when `Storybook` was installed as this contains the stories for the default example components that were removed and our components have the `.stories.tsx` files next to the component file.

### Testing
Each component should have a test file to check the quality of the code and check for any issues/bugs. Since we already have `@storybook/addon-vitest`, we are using `Vitest` with `React Testing Library` alongside `@testing-library/user-event` for the component tests:

```shell
$ npm install -D vitest@4.1.11 jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Ensure the version of `Vitest` matches the `Storbook Vitest` version, currently at `4.1.11`.

Then once the dependencies are installed, add a test setup file:

```typescript
// src/test/setup.ts

import "@testing-library/jest-dom/vitest";
```

Within the `vite.config.ts` file, make sure `Vitest` uses `jsdom`:

```typescript
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
```

Update the scripts in the `package.json` file to run the tests:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

Then within each component file, add a `.test.tsx` file, for example, `Button.test.tsx`.

To run the tests:

```shell
$ npm run test
# Run a one-off CI-style:
$ npm run test:run
```

Keep small unit tests on primitives such as `Button` and `FeatureItem`. Use **integration tests** for composed components like `Card`, `Checkout` and `PurchaseFlow`.

It maybe also worthwhile installing `Playwright`:

```shell
$ npx playwright install 
```

### ESLint
`ESLint` is used to check for code quality and to highlight potential issues or errors in the code before they reach production.

Begin by installing `ESLint` and any dependencies needed:

```shell
$ npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
```

Install `globals` also:

```shell
$ npm install -D globals
```

Once installed, create a file in the root of the project folder named: `eslint.config.js` and add the following code:

```javascript
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import {
  defineConfig,
  globalIgnores,
} from "eslint/config";

export default defineConfig([
  globalIgnores([
    "dist",
    "coverage",
    "storybook-static",
    "node_modules",
  ]),

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  {
    files: [
      "**/*.test.{ts,tsx}",
      "src/test/**/*.{ts,tsx}",
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,

        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        vi: "readonly",

        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  },

  ...storybook.configs["flat/recommended"],
]);
```

Add scripts to the `package.json` file:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

To run `ESLint`:

```shell
$ npm run lint
# Auto-fix any issues, where possible
$ npm run lint:fix
```

## CI
To add `CI` to the project, create a folder in the project root named `.github/workflows`. Inside this create a file named `ci.yml` and add the following code:

```yaml
name: CI

on:
  pull_request:
    branches:
      - main

  push:
    branches:
      - main

jobs:
  validate:
    name: Lint, Test and Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "24"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Run tests
        run: npm run test:run

      - name: Build library
        run: npm run build
```

When code/branch is merged into `main`, the workflow will run and check `ESLint`, Tests and run the `build` to check for issues/errors before merging to production.