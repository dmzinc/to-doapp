const List = ({ list, onDelete }) => {
  return (
    <div id="all-list">
      <ul id="list">
        <li>
          <span>{list.text}</span>
          <input type="submit" className="edit" value="Edit" />
         <input type="submit" className="delete" value="Delete"  onClick={()=>onDelete(list.id )}/>
        </li>
      </ul>
    </div>
  );
};

export default List;
