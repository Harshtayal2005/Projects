import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store.jsx";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(0); // 0 -> Home, 1 -> Create Post

  const handleToggleSwitch = (state) => {
    if (state == "on") {
      setSelected(1);
    } else {
      setSelected(0);
    }
    return;
  };

  return (
    <>
      <PostListProvider>
        <div className="flex">
          <div className="w-[18%] min-h-[900px]">
            <Sidebar
              handleToggleSwitch={handleToggleSwitch}
              selected={selected}
            ></Sidebar>
          </div>

          <div className="w-[82%] flex flex-col">
            <Header></Header>

            {selected === 1 ? <CreatePost /> : <PostList />}
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
