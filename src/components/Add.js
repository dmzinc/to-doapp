import Button from "./Button";

const Add = () => {
  return (
    <div>
      <form id="add-list">
        <input id="item" type="text" placeholder="Make new list..." />
        <Button value="add" title="Add" />
      </form>
    </div>
  );
};

export default Add;
