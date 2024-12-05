/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const DataForm = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/data", { key, value });
    setKey("");
    setValue("");
  };

  return (
    <form className="flex space-x-10 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="h-7 border border-gray-600"
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        required
      />
      <input
        type="number"
        className="h-7 border border-gray-600"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button 
      className=" bg-red-700 text-white"
      type="submit">Submit</button>
    </form>
  );
};

export default DataForm;
