import React, { useState } from "react";
import List from "./List";

const Getlist = () => {
  //React Hook
  const [todos] = useState([
    { text: "sleep" },
    { text: "Wake up" },
    { text: "Code" },
    { text: "Repeat" },
  ]);

  return (
    <div id="all-list">
      <h2 className="title">List of things</h2>
      <ul id="list">
        {todos.map((todo, index) => (
          <List text={todo.text} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Getlist;
