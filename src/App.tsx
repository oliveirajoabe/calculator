import { ThemeProvider } from "styled-components";
import GlobalStyled from "./commons/styles/global";
import theme from "./commons/styles/theme";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
