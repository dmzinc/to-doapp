import List from "./List";
const Lists = ({ lists, onDelete }) => {
  return (
    <>
      {lists.map((list, index) => (
        <List key={index} list={list} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Lists;
