import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
 
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };
 
  const toggleDoneHandler = (id, isDone) => {
    if (!isDone) {
      dispatch(marksAsDone(id));
    }
  };
  
  return (
    <>
      <div className="row ">
        <div className=" bg-secondary align-items-center d-flex justify-content-center">
          <div >
           
            <h2 className="text-center">Todo</h2>
        
            <AddForm />
            <br />
           
            <ul>
             
              {todos.map((todo) => (
                <li key={todo.id}>
                  {todo.task}{" "}
                  <button onClick={() => clickHandler(todo.id)}>Delete</button>{" "}
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