import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
  
};

// Create a slice for managing todos
export const todoSlice = createSlice({
 
  name: "todo",
  initialState,
  reducers: {
    
    addTodo: (state, action) => {
     
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      
      state.todos.push(newTodo);
    },
    
    deleteTodo: (state, action) => {
      // Filtering  the todo with the provided id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    marksAsDone: (state, action) => {
      // Update the isDone property of the todo with the provided id
      state.todos = state.todos.map((todo) => {
        // If todo id matches the id from action payload
        if (todo.id === action.payload) {
          
          todo.isDone = true;
        }
        return todo; // Returns the updated todo
      });
    }
  }
});

export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions;

export default todoSlice.reducer;
