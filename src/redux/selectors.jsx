import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filter.search;
export const todoListSelector = (state) => state !== null ? state.todoList : [];
export const statusSelector = (state) => state.filter.status;
export const prioritySelector = (state) => state.filter.priority;

export const remainTodoListSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritySelector,
  (todoList, searchText, status, priorities) => {
    if (todoList === null) {return []}

    if (status === "All") {
      return todoList.filter((todo) => {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      });
    }

    return todoList.filter((todo) => {
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) && 
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
