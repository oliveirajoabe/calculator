import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/commons/styles/theme";
import "../src/commons/styles/fonts.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
