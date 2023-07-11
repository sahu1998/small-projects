import "./App.css";
import GuessTheNumber from "./components/Main";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App py-5" style={{height: "100vh"}}>
      <Container className="position-center">
        <GuessTheNumber />
      </Container>
    </div>
  );
}

export default App;
