import { Checkbox, Input, Row, Space, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice from "./todoSlice";
import { FiDelete, FiEdit } from "react-icons/fi";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

const Todo = ({ name, priority, completed, id }) => {
  const [checked, setChecked] = useState(completed);
  const [isEdit, setIsEdit] = useState(false);
  const [todoName, setTodoName] = useState(name);
  const dispatch = useDispatch();

  const toggleCheckBox = () => {
    setChecked(!checked);
    dispatch(todoSlice.actions.toogleTodo(id));
  };

  const handleEditTodo = () => {
    setIsEdit(!isEdit);
  };

  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
    dispatch(todoSlice.actions.editTodo({
      todoID: id,
      text: e.target.value
    }))
  };

  const handleDeleteTodo = () => {
    dispatch(todoSlice.actions.deleteTodo(id));
  }

  return (
    <Row
      justify="space-between"
      className={
        checked ? "line-through opacity-50 mb-2 truncate" : "mb-2 truncate"
      }
    >
      <Checkbox checked={checked} onChange={toggleCheckBox}>
        {isEdit ? (
          <Input value={todoName} onChange={handleTodoNameChange} />
        ) : (
          todoName
        )}
      </Checkbox>
      <div>
        <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
        <Space size={"small"}>
          <FiEdit onClick={handleEditTodo} />
          <FiDelete onClick={handleDeleteTodo}/>
        </Space>
      </div>
    </Row>
  );
};

export default Todo;
