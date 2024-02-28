import Item from "./Item.jsx";

const Items = ({ passItems, handleClickEvent, currVal }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-[39rem] h-[39rem]">
      {passItems.map((items, idx) => (
        <Item
          key={idx}
          value={items}
          handleClickEvent={handleClickEvent}
          idx={idx}
          currVal = {currVal}
        ></Item>
      ))}
    </div>
  );
};

export default Items;
