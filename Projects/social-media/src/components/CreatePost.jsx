import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const title = useRef();
  const desc = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newTitle = title.current.value;
    const newDesc = desc.current.value;
    const newReactions = reactions.current.value;
    const newTags = tags.current.value.split(" ");

    title.current.value = "";
    desc.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";

    addPost(newTitle, newDesc, newReactions, newTags);
  };

  return (
    <>
      <div className="ml-20 mt-10">
        <form
          onSubmit={handleFormSubmit}
          className="border border-slate-600 rounded-xl p-9 w-[35rem] flex flex-col gap-3"
        >
          <div>
            <Label htmlFor="title" className="text-[1.5rem]">
              Post Title
            </Label>
            <Input
              type="text"
              ref={title}
              id="title"
              placeholder="Share your thoughts..."
              className="w-[30rem] h-[2.8rem] text-[1.1rem]"
            />
          </div>

          <div>
            <Label htmlFor="desc" className="text-[1.5rem]">
              Description
            </Label>
            <Textarea
              placeholder="Describe your thoughts"
              ref={desc}
              className="text-[1.1rem] h-[6rem]"
            ></Textarea>
          </div>

          <div>
            <Label htmlFor="reactions" className="text-[1.5rem]">
              Reactions
            </Label>
            <Input
              type="text"
              ref={reactions}
              id="reactions"
              placeholder="People reacted on this post"
              className="w-[30rem] h-[2.8rem] text-[1.1rem]"
            />
          </div>

          <div>
            <Label htmlFor="hashtags" className="text-[1.5rem]">
              Hashtags
            </Label>
            <Input
              type="text"
              ref={tags}
              id="hashtags"
              placeholder="Enter your hashtags with a space"
              className="w-[30rem] h-[2.8rem] text-[1.1rem]"
            />
          </div>

          <Button className="h-[3rem] w-[10rem] text-[1.4rem] mt-4">
            Post
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
