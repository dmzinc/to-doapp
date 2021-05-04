import Button from "./Button";

const List = ({ text }) => {
  return (
    <li>
      <span>{text}</span>
      <Button value="edit" title="Edit" />
      <Button value="delete" title="Delete" />
    </li>
  );
};

export default List;
