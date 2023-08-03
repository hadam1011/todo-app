import { Input, Typography } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import filterSlice from '../filters/filtersSlice';

const Search = () => {
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();

  const handleChangeSearchText = (e) => {
    setSearchValue(e.target.value);
    dispatch(filterSlice.actions.searchTodo(e.target.value));
  } 

  return (
    <div className="mb-4 pt-5">
      <Typography.Text className="font-bold text-gray-700">Search:</Typography.Text>
      <Input
        value={searchValue}
        suffix={<SearchOutlined />}
        allowClear
        className="w-full rounded-lg mt-2"
        onChange={handleChangeSearchText}
      />
    </div>
  );
};

export default Search;
