import "./index.css";
import TakeInput from "./components/TakeInput.jsx";
import Items from "./components/Items.jsx";
import Message from "./components/Message.jsx";
import { useState } from "react";
import { TodoItemContext } from "./store/todo-items-context.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItems = (target, dueDate) => {
    if (target.length !== 0 || dueDate.length !== 0) {
      setTodoItems((currVal) => [...currVal, { name: target, due: dueDate }]);
    }
  };

  const deleteItems = (todoItemName) => {
    let newArr = todoItems.filter((val) => val.name !== todoItemName);
    setTodoItems(newArr);
  };

  return (
    <>
      <TodoItemContext.Provider
        value={{
          todoItems, //key and value are same i.e => todoItems: todoItems
          addNewItems, //key and value are same i.e => addNewItems: addNewItems
          deleteItems, //key and value are same i.e => deleteItems: deleteItems
        }}
      >
        <div className="min-h-screen bg-blue-950 flex justify-center items-center box-border p-0 m-0">
          {/* todo container  */}
          <div className="w-[50%] bg-white rounded-xl my-20">
            {/* heading  */}
            <h1 className="text-center text-[3rem] font-[500] font-serif">
              Todo App
            </h1>

            {/* take the input  */}
            <TakeInput></TakeInput>

            {/* display message  */}
            <Message></Message>

            {/* show the items  */}
            <Items></Items>
          </div>
        </div>
      </TodoItemContext.Provider>
    </>
  );
}

export default App;
