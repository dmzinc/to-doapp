import { useState } from "react";
import Header from "./components/Header";
import Lists from "./components/Lists";
import AddList from "./components/AddList";

function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      text: "Forbes",
    },
    {
      id: 2,
      text: "Ade",
    },
  ]);
  //Add List
  const addList = (list) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newList = { id, ...list };
    setLists([...lists, newList]);
  };
  //Delete List
  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };
  return (
    <div id="wrapper">
      <Header />
      {lists.length > 0 ? (
        <Lists lists={lists} onDelete={deleteList} />
      ) : (
        "Add a new Todo"
      )}
      <AddList onAdd={addList} />
    </div>
  );
}

export default App;
