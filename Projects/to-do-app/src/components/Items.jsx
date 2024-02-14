import Item from "./Item.jsx";

function Items({ passItems, onDeleteClick }) {
  return (
    <div className="grid grid-cols-6 gap-4 px-5 my-4">
      {passItems.map((items) => (
        <Item items={items} deleteItem={onDeleteClick}></Item>
      ))}
    </div>
  );
}

export default Items;
