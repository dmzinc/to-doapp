import Button from "./Button";

const List = ({ text }) => {
  return (
    <li>
      <span>{text}</span>
      <Button value="edit" title="edit" />
      <Button value="delete" title="delete" />
    </li>
  );
};

export default List;
