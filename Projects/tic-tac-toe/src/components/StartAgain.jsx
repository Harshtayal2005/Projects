import { Button } from "@/components/ui/button";

const StartAgain = ({handleReset}) => {
    return( 
    <Button className=" bg-purple-300 text-black text-[1.7rem] mt-5 h-[5rem] w-[12rem] rounded-xl font-serif" onClick={handleReset}>Start Again</Button>
    );
}

export default StartAgain;