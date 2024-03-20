import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <div className="bg-black h-[6.5rem] px-[5rem] flex items-center justify-around gap-5">
        <ul className="flex gap-5 text-[1.2rem] text-white">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>About</li>
        </ul>

        <Input
          type="text"
          className="w-[20rem] h-[3rem] text-white text-[1.1rem]"
        ></Input>

        <div className="flex gap-3">
          {/* can use array map also */}
          <Button className="bg-yellow-600 text-black text-[1.2rem] h-[3rem]">
            Login
          </Button>
          <Button className="bg-green-600 text-black text-[1.2rem] h-[3rem]">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
