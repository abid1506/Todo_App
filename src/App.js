
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";

import { store } from "./app/store";


function App() {
  
  return (
    <>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </>
  );
}


export default App;
