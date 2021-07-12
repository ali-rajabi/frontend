import "./sass/App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import Questions from "./components/quiz/question/Questions";
import Template from "./components/layout/Template";

function App() {
  return (
    <Provider store={store}>
      <Template>
        <Questions />
      </Template>
    </Provider>
  );
}

export default App;
