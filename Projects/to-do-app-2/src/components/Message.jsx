import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-context.jsx";

const Message = () => {
  const { todoItems } = useContext(TodoItemContext);
  return (
    todoItems.length === 0 && (
      <h1 className="text-center text-[1.8rem] text-blue-500 font-serif">
        Everything is completed. Enjoy your day
      </h1>
    )
  );
};

export default Message;
