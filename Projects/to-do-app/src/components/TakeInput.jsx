import { Button } from "@/components/ui/button";
import { useState } from "react";

function TakeInput({ onNewItem }) {
  const [todoNameChange, setTodoNameChange] = useState("");
  const [todoDateChange, setTodoDateChange] = useState("");

  const handleNameChange = (evt) => {
    setTodoNameChange(evt.target.value);
  };
  const handleDateChange = (evt) => {
    setTodoDateChange(evt.target.value);
  };

  const handleButtonClicked = () => {
    onNewItem(todoNameChange, todoDateChange);
    setTodoNameChange("");
    setTodoDateChange("");
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      onNewItem(todoNameChange, todoDateChange);
    }
  };

  const handleKeyDown2 = (evt) => {
    evt.preventDefault();
    if (evt.key === "Enter") {
      onNewItem(todoNameChange, todoDateChange);
    }
  };

  return (
    <div className="grid grid-cols-6 gap-4 px-5 my-4">
      <input
        className="col-span-3 outline-none border border-gray-400 rounded-md px-2 h-[3rem] font-serif"
        type="text"
        placeholder="Enter Todo here"
        value={todoNameChange}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />
      <input
        className="col-span-2 border border-gray-400 rounded-md px-2 h-[3rem] font-serif "
        type="date"
        value={todoDateChange}
        onChange={handleDateChange}
        onKeyDown={handleKeyDown2}
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
