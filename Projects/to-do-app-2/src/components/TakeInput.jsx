import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-context.jsx";

function TakeInput() {
  const { addNewItems } = useContext(TodoItemContext);

  const todoNameEle = useRef();
  const dueDateEle = useRef();

  const handleButtonClicked = () => {
    const todoName = todoNameEle.current.value;
    const dueDate = dueDateEle.current.value;
    todoNameEle.current.value = "";
    dueDateEle.current.value = "";
    addNewItems(todoName, dueDate);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      const todoName = todoNameEle.current.value;
      const dueDate = dueDateEle.current.value;
      todoNameEle.current.value = "";
      dueDateEle.current.value = "";
      addNewItems(todoName, dueDate);
    }
  };

  return (
    <div className="grid grid-cols-6 gap-4 px-5 my-4">
      <input
        className="col-span-3 outline-none border border-gray-400 rounded-md px-2 h-[3rem] font-serif text-[1.1rem]"
        type="text"
        placeholder="Enter Todo here"
        ref={todoNameEle}
        onKeyDown={handleKeyDown}
      />
      <input
        className="col-span-2 border border-gray-400 rounded-md px-2 h-[3rem] font-serif text-[1.1rem]"
        type="date"
        ref={dueDateEle}
        onKeyDown={handleKeyDown}
      />
      <Button
        className="col-span-1 bg-green-800 h-[3rem]"
        onClick={handleButtonClicked}
      >
        Add
      </Button>
    </div>
  );
}

export default TakeInput;
