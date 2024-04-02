import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
 
  const todos = useSelector((state) => state.todos);
  
  const dispatch = useDispatch();

  // Function to handle click event for deleting a todo
  const clickHandler = (id) => {
    // Dispatch the deleteTodo action with the todo id
    dispatch(deleteTodo(id));
  };

  // Function to handle click event for toggling todo completion status
  const toggleDoneHandler = (id, isDone) => {
    // If todo is not yet done
    if (!isDone) {
      // Dispatch the marksAsDone action with the todo id
      dispatch(marksAsDone(id));
    }
  };

  
  return (
    <>
      <div className="row ">
        <div className=" bg-secondary align-items-center d-flex justify-content-center">
          <div >
            {/* Heading for Todo section */}
            <h2 className="text-center">Todo</h2>
            {/* Render the AddForm component */}
            <AddForm />
            <br />
            {/* Render the list of todos */}
            <ul>
              {/* Map over todos array to render each todo */}
              {todos.map((todo) => (
                <li key={todo.id}>
                  {/* Display todo task */}
                  {todo.task}{" "}
                  {/* Button to delete todo */}
                  <button onClick={() => clickHandler(todo.id)}>Delete</button>{" "}
                  {/* Button to toggle todo completion status */}
                  {/* Button text changes based on todo completion status */}
                  <button onClick={() => toggleDoneHandler(todo.id, todo.isDone)}>
                    {todo.isDone ? "Task Completed" : "Incomplete task"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
