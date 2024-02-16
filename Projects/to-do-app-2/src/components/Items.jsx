import Item from "./Item.jsx";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-context.jsx";

function Items() {
  const { todoItems } = useContext(TodoItemContext);

  return (
    <div className="grid grid-cols-6 gap-4 px-5 my-4">
      {todoItems.map((items) => (
        <Item items={items} key={items.name}></Item>
      ))}
    </div>
  );
}

export default Items;
