import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {

  // Define state to hold the task input value
  const [task, setTask] = useState("");

  // Get dispatch function from Redux
  const dispatch = useDispatch();

  // Define a function to handle form submission
  const submitHandler = (evt) => {
    // Prevent the default form submission behavior
    evt.preventDefault();

    // Log the task value to the console
    console.log(task);

    // Dispatch the addTodo action with the task value
    dispatch(addTodo(task));

    // Clear the task input field by resetting its value to an empty string
    setTask("");
  };

  
  return (
    <>
      {/* Define a form with an onSubmit event handler */}
      <form className='' onSubmit={submitHandler}>
        {/* Define an input field with type 'text' */}
        {/* When the input value changes, update the task state */}
        <input type='text' onChange={(e) => setTask(e.target.value)}></input>{" "}
        {/* Define a button to submit the form */}
        <button>Add Task</button>
      </form>
    </>
  );
}
