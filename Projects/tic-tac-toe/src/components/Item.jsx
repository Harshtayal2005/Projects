const Item = ({ value, handleClickEvent, idx, currVal }) => {
  const calculateBackgroundColor = () => {
    let win = currVal[idx] == "G"? true : false;
    let loose = currVal[idx] == "R"? true : false;
    let draw = currVal[idx] == "D"? true : false;
    if(win) {
      return "bg-green-600";
    }
    else if(loose) {
      return "bg-red-600";
    }
    else if(draw) {
      return "bg-slate-700";
    }
    return "bg-amber-400";
  };

  return (
    <>
      <div
        className={`${calculateBackgroundColor()} h-full w-full flex justify-center items-center hover:ring hover:ring-black hover:cursor-pointer text-[7rem]`}
        onClick={handleClickEvent}
        id={idx}
      >
        {value}
      </div>
    </>
  );
};

export default Item;
