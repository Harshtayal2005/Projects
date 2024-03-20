import { Badge } from "@/components/ui/badge";
import { RiChatDeleteFill } from "react-icons/ri";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <>
      <div className="flex">
        <div className="w-[50rem] border rounded-xl flex flex-col gap-2 p-7">
          <div className="flex justify-between">
            <h1 className="text-[1.4rem] font-medium">{post.title}</h1>
          </div>

          <div>
            <h2 className="text-[1.1rem]">{post.desc}</h2>
          </div>

          <div className="flex gap-1 mt-5 mb-2">
            {post.badge.map((badges) => (
              <Badge key={badges}>{badges}</Badge>
            ))}
          </div>

          <div className="h-[4rem] bg-green-300 flex items-center rounded-xl pl-5">
            <p>{post.msg}</p>
          </div>
        </div>
        <div className="-ml-6 -mt-4">
          <RiChatDeleteFill
            className="h-[2rem] w-[2.5rem] text-[1.1rem] rounded-xl hover:cursor-pointer "
            onClick={() => deletePost(post.id)}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
