//-----Redux core-----
// const initState = [
//   { id: 1, name: "Learn Redux", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn React", completed: true, priority: "Low" },
//   { id: 3, name: "Learn Redux Toolkits", completed: false, priority: "High" },
// ];

// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//       case "todoList/addTodo": {
//       return [...state, action.payload];
//     }

//       case "todoList/toogleTodo": {
//       return state.map((todo) => {
//         return todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo;
//       });
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default todoReducer;

//-----Redux toolkit-----
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: JSON.parse(localStorage.getItem("todoList")),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state));
    },

    toogleTodo: (state, action) => {
      const newTodoList = state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return newTodoList;
    },

    editTodo: (state, action) => {
      const newTodoList = state.map((todo) => {
        return todo.id === action.payload.todoID
          ? { ...todo, name: action.payload.text }
          : todo;
      });

      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return newTodoList;
    },

    deleteTodo: (state, action) => {
        const newTodoList = state.filter(todo => todo.id !== action.payload);
        localStorage.setItem("todoList", JSON.stringify(newTodoList));
        return newTodoList;
    },
  },
});

export default todoSlice;
