import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {

  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (evt) => {
   
    evt.preventDefault();

    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      
      <form className='' onSubmit={submitHandler}>
        <input type='text' onChange={(e) => setTask(e.target.value)}></input>{" "}
        <button>Add Task</button>
      </form>
    </>
  );
}
