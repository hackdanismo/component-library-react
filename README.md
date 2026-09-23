# Component Library: React

## Import the Library
To import the library and select components to be included, firstly install the `npm` package and import the CSS and components required:

```typescript
import "@hackdanismo/component-library-react/style.css";
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
├── index.d.ts
└── style.css
```

It is recommended to compile `Tailwind` inside the component library and ship the generated `CSS` rather than requiring each application that installs the component library to have to configure `Tailwind`.