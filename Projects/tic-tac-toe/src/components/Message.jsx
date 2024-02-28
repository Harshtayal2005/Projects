const Message = ({flag}) => {

    const checkVal = () => {
        if(flag == "W") {
            return "Congrats, You Won!"
        }
        else if(flag == "L") {
            return "Ah! You Lost"
        }
        else if(flag == "D") {
            return "It's a tie"
        }
        return "";
    }

    const checkColor = () => {
        if(flag == "W") {
            return "bg-green-500"
        }
        else if(flag == "L") {
            return "bg-red-500"
        }
        else if(flag == "D") {
            return "bg-slate-500"
        }
        return "";
    }

    return(
        <div className={`mt-[0.8rem] w-[25rem] h-[3.6rem] flex justify-center items-center text-[1.7rem] text-sky-950 font-serif font-bold rounded-xl ${checkColor()}`}>{checkVal()}</div>
    );
}

export default Message;