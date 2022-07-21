import "styled-components";
import theme from "../commons/styles/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
