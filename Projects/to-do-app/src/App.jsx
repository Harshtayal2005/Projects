import "./index.css";
import TakeInput from "./components/TakeInput.jsx";
import Items from "./components/Items.jsx";
import Message from "./components/Message.jsx";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (target, dueDate) => {
    if (target.length !== 0 || dueDate.length !== 0) {
      let newArr = [...todoItems, { name: target, due: dueDate }];
      setTodoItems(newArr);
    }
  };

  const handleDeleteItem = (todoItemName) => {
    let newArr = todoItems.filter((val) => val.name !== todoItemName);
    setTodoItems(newArr);
  };

  return (
    <>
      <div className="h-screen bg-blue-950 flex justify-center items-center">
        {/* todo container  */}
        <div className="w-[50%] bg-white rounded-xl">
          {/* heading  */}
          <h1 className="text-center text-[3rem] font-[500] font-serif">
            Todo App
          </h1>

          {/* take the input  */}
          <TakeInput onNewItem={handleNewItem}></TakeInput>

          {/* display message  */}
          {todoItems.length === 0 && <Message></Message>}

          {/* show the items  */}
          <Items passItems={todoItems} onDeleteClick={handleDeleteItem}></Items>
        </div>
      </div>
    </>
  );
}

export default App;
