import { Button, Input, Select, Space, Tag, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice from '../todo/todoSlice';
import { v4 as uuidv4 } from 'uuid';

const AddButton = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [messageApi, contextHolder] = message.useMessage();

  const handlePriorityChange = (e) => {
    setPriority(e);
  }

  const displayMessage = (text, type) => {
    messageApi.open({
      type: type,
      content: text,
    });
  }

  const options = (
    <Select value={priority} defaultValue="Medium" onChange={handlePriorityChange}>
      <Select.Option value="High">
        <Tag color="red">High</Tag>
      </Select.Option>
      <Select.Option value="Medium">
        <Tag color="blue">Medium</Tag>
      </Select.Option>
      <Select.Option value="Low">
        <Tag color="gray">Low</Tag>
      </Select.Option>
    </Select>
  );

  const hanldeClickAdd = () => {
    if (userInput !== '') {
      dispatch(todoSlice.actions.addTodo({
        id: uuidv4(),
        name: userInput,
        priority: priority,
        completed: false
      }));
      setPriority('Medium');
      setUserInput('');
    } else displayMessage("Please enter todo's name", 'error');
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  return (
    <>
      {contextHolder}
      <Space.Compact className="w-full">
        <Input value={userInput} addonAfter={options} allowClear onChange={handleInputChange}/>
        <Button
          className="bg-[#1677ff] text-white"
          onClick={hanldeClickAdd}
        >
          Add
        </Button>
      </Space.Compact>
    </>
  );
};

export default AddButton;
