import { Radio, Typography, Select, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import filterSlice from './filtersSlice';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

const Filters = () => {
  const [status, setStatus] = useState('All');
  const [priorities, setPriorities] = useState([]);
  const dispatch = useDispatch();

  const options = [
    { label: 'Low', value: 'Low' },
    { label: 'Medium', value: 'Medium' },
    { label: 'High', value: 'High' },
  ];

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    dispatch(filterSlice.actions.statusChange(e.target.value));
  }

  const handlePriorityChange = (values) => {
    setPriorities(priorities);
    dispatch(filterSlice.actions.priorityChange(values));
  }

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        color={priorityColorMapping[label]}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {value}
      </Tag>
    );
  }

  return (
    <div>
      {/* Filters by status*/}
      <div className="flex flex-col w-full mb-4">
        <Typography.Text className="mb-2 font-bold text-gray-700">Filter by status:</Typography.Text>
        <Radio.Group value={status} onChange={handleStatusChange}>
          <Radio value={"All"}>All</Radio>
          <Radio value={"Completed"}>Completed</Radio>
          <Radio value={"Doing"}>Doing</Radio>
        </Radio.Group>
      </div>

      {/* Filters by priority*/}
      <div className="flex flex-col w-full mb-4">
        <Typography.Text className="mb-2 font-bold text-gray-700">Filter by priority:</Typography.Text>
        <Select mode="multiple" allowClear tagRender={tagRender} options={options} onChange={handlePriorityChange}/>
      </div>
    </div>
  );
};

export default Filters;
