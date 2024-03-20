import Post from "./Post.jsx";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);

  return (
    <>
      <div className="mt-10 ml-10 flex flex-col gap-7">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
