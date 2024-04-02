
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";

import { store } from "./app/store";

// Defining the App component
function App() {
  // Returning JSX
  return (
    <>
      {/* Providing Redux store to the entire app */}
      <Provider store={store}>

        {/* Rendering the Todo component */}
        <Todo></Todo>
      </Provider>
    </>
  );
}


export default App;
