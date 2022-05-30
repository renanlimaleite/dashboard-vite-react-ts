import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <header>dashboard</header>
      <MyRoutes />
      <footer>footer</footer>
    </BrowserRouter>
  );
}

export default App;
