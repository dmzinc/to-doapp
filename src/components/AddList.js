import { useState } from "react";
const AddList = ({ onAdd }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a todo ");
      return;
    }

    onAdd({text})

    setText('')
  };
  return (
    <form id="add-list" onSubmit={onSubmit}>
      <input
        id="item"
        type="text"
        placeholder="Make new list..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add">Add</button>
    </form>
  );
};

export default AddList;
