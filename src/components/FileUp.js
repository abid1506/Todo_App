import React from "react";

import { useState, useEffect } from "react";

export default function FileUp() {
  const [state, setState] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const addItem = () => {
    const newObject = { name: newItemName };
    setState((prevState) => [...prevState, newObject]);
    setNewItemName("");
  };

  const handleInputChange = (event) => {
    setNewItemName(event.target.value);
  };

  useEffect(() => {
    console.log(`[${state.map((item) => item.name).join(", ")}]`);
  }, [state]);

  return (
    <>
      <div>
        <h1>Array: storing objects</h1>

        <input
          type="text"
          value={newItemName}
          onChange={handleInputChange}
          placeholder="Enter new item name"
        />
        <button onClick={addItem}>Done</button>
      </div>
    </>
  );
}
