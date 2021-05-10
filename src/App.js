import { useState, useEffect } from "react";
import Header from "./components/Header";
import Lists from "./components/Lists";
import AddList from "./components/AddList";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      const listsFromServer = await fetchLists();
      setLists(listsFromServer);
    };
    getLists();
  }, []);
  //Fetch list
  const fetchLists = async () => {
    const res = await fetch("http://localhost:5000/lists");

    const data = await res.json();

    return data;
  };
  //Add List
  const addList = async (list) => {
    const res = await fetch("http://localhost:5000/lists", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(list),
    });

    const data = await res.json();
    setLists([...lists, data]);
  };
  //Delete List
  const deleteList = async (id) => {
    await fetch(`http://localhost:5000/lists/${id}`, {
      method: "DELETE",
    });

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
