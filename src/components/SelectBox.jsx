import React, { useState } from "react";

const SelectBox = ({ items, handleSelectedItem }) => {
  const [selectedValue, setSelectedValue] = useState("volvo");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleSelectedItem(event.target.value);
  };
  return (
    <select onChange={handleChange} value={selectedValue}>
      {items.map((item) => (
        <option value={item.value} label={item.label} key={item.id}></option>
      ))}
    </select>
  );
};

export default SelectBox;
