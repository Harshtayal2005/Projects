import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Sidebar = ({ handleToggleSwitch, selected }) => {
  const toggleItemsClass = `text-[1.6rem] text-white data-[state=on]:bg-sky-600 data-[state=on]:text-black h-[3rem] w-[12rem]`;

  return (
    <>
      <div className="bg-black flex flex-col h-full">
        <div className="flex justify-center items-center h-[6.5rem]">
          <h1 className="text-white text-[2rem]">Sidebar</h1>
        </div>
        <hr className="w-[80%] mx-auto" />

        <div className="mt-[2rem]">
          <ToggleGroup type="single" className="flex flex-col gap-5">
            <ToggleGroupItem
              value="home"
              data-state={!selected && "on"}
              className={toggleItemsClass}
              onClick={() => handleToggleSwitch("off")}
            >
              Home
            </ToggleGroupItem>
            <ToggleGroupItem
              value="create-post"
              className={toggleItemsClass}
              onClick={() => handleToggleSwitch("on")}
            >
              Create Post
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
