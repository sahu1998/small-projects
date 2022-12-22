import "./App.css";
import TodoInput from "./components/input";
import ShowData from "./components/list/ShowData";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="container py-5 d-flex flex-column justify-content-center">
        <TodoInput />
        <ShowData />
      </div>
    </Provider>
  );
}

export default App;
