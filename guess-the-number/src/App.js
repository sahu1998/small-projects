import "./App.css";
import GuessTheNumber from "./components/Main";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App py-5">
      <Container className="position-center">
        <GuessTheNumber />
      </Container>
    </div>
  );
}

export default App;
