import { createContext } from "react";
import { useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (items) => items.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [...currPostList, action.payload];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_postList
  );
  const addPost = (newTitle, newDesc, newReactions, newTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: newTitle,
        desc: newDesc,
        badge: newTags,
        msg: `This post has been reacted by ${newReactions} people`,
      },
    });
    alert("Post Created");
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const default_postList = [
  {
    id: "1",
    title: "Manali trip",
    desc: "I enjoyed this summer vacations with a manali trip! ",
    badge: ["vacations", "enjoy", "chill"],
    msg: "This post has been reacted by 15000 people",
  },
  {
    id: "2",
    title: "My quotes",
    desc: "Checkout my all quotes based on life, humour etc",
    badge: ["quote", "life", "humour"],
    msg: "This post has been reacted by 2000 people",
  },
];

export default PostListProvider;
