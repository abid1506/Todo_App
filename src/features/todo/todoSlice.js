import { createSlice, nanoid } from '@reduxjs/toolkit';

// Define the initial state for the todos slice
const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

// Create a slice for managing todos
export const todoSlice = createSlice({
  // Name of the slice
  name: "todo",
  // Initial state
  initialState,
  // Reducers for managing state mutations
  reducers: {
    // Reducer for adding a new todo
    addTodo: (state, action) => {
      // Generate a unique id for the new todo
      const newTodo = {
        id: nanoid(),
        // Task content from action payload
        task: action.payload,
        // New todos are initially not done
        isDone: false,
      };
      // Add the new todo to the todos array in state
      state.todos.push(newTodo);
    },

    // Reducer for deleting a todo
    deleteTodo: (state, action) => {
      // Filter out the todo with the provided id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // Reducer for marking a todo as done
    marksAsDone: (state, action) => {
      // Update the isDone property of the todo with the provided id
      state.todos = state.todos.map((todo) => {
        // If todo id matches the id from action payload
        if (todo.id === action.payload) {
          // Mark the todo as done
          todo.isDone = true;
        }
        return todo; // Return the updated todo
      });
    }
  }
});


export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions;


export default todoSlice.reducer;
