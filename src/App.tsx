import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes";
import GlobalStyle from "./styles/global";

import { myTheme } from "./styles/theme/default";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <GlobalStyle />
          <header>dashboard</header>
          <MyRoutes />
          <footer>footer</footer>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
