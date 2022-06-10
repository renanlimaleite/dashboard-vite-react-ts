import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes";
import GlobalStyle from "./resources/styles/global";

import { Header } from "./ui/Header";
import theme from "./resources/styles/theme";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <MyRoutes />
          <footer>footer</footer>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
