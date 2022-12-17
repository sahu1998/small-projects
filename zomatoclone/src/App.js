import "./App.css";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
function App() {
  return (
    <Provider store={store}>
      <Container className="p-0 bg-light" style={{ maxWidth: "100%" }}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
