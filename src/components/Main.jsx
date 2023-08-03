import React, { useEffect, useLayoutEffect } from "react";
import { Divider, Typography } from "antd";
import Search from "./search";
import Todo from "./todo";
import Filters from "./filters";
import AddButton from "./add-btn";
import { useSelector } from "react-redux";
import { remainTodoListSelector } from "../redux/selectors";

const Main = () => {
  const todoList = useSelector(remainTodoListSelector);

  useLayoutEffect(() => {
    const todoData = localStorage.getItem('todoList');
    if (todoData === null) localStorage.setItem('todoList', JSON.stringify([]));
  }, [])

  return (
    <div className="mx-auto max-w-[500px] h-[90vh] bg-white p-5 rounded-md shadow-xl flex flex-col justify-between relative top-6 border-2">
      <div>
        <Typography.Title className="text-center">
          Todo App with Redux
        </Typography.Title>
        <Search />
        <Filters />
        <Divider />
        {/* Todo List */}
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </div>
      <AddButton />
    </div>
  );
};

export default Main;
