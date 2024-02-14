import { Button } from "@/components/ui/button";

function Item({ items, deleteItem }) {
  return (
    <>
      <div className="col-span-3 px-2 text-[1.3rem] h-[3rem] font-serif flex items-center">
        <p>{items.name}</p>
      </div>

      <div className="col-span-2 px-2 text-[1.2rem] h-[3rem] font-serif flex items-center">
        <p className="">{items.due}</p>
      </div>

      <Button
        className="col-span-1 bg-red-800 h-[3rem]"
        onClick={() => deleteItem(items.name)}
      >
        Delete
      </Button>
    </>
  );
}

export default Item;
