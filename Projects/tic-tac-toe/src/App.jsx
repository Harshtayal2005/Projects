import { useState } from "react";
import Items from "./components/Items.jsx";
import Message from "./components/Message.jsx";
import StartAgain from "./components/StartAgain.jsx";

function App() {
  const [gameCompleted, setGameCompleted] = useState(0);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [yourScore, setYourScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [currVal, setCurrVal] = useState(["", "", "", "", "", "", "", "", ""]);
  const [result, setResult] = useState("");

  const handleReset = () => {
    setGameCompleted(0);
    setNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCurrVal(["", "", "", "", "", "", "", "", ""]);
    setYourScore(0);
    setCompScore(0);
  };

  const handleClickEvent = (evt) => {
    if (gameCompleted) {
      alert("Game Completed");
      return;
    }

    let newBoard = [...board];

    const checkPlayer = (x, y, z) => {
      let newCurrVal = [...currVal];
      newCurrVal[x] = "G";
      newCurrVal[y] = "G";
      newCurrVal[z] = "G";
      setYourScore(yourScore + 1);
      setGameCompleted(1);
      setCurrVal(newCurrVal);
      setResult("W");
      return;
    };

    const checkComp = (x, y, z) => {
      let newCurrVal = [...currVal];
      newCurrVal[x] = "R";
      newCurrVal[y] = "R";
      newCurrVal[z] = "R";
      setCompScore(compScore + 1);
      setGameCompleted(1);
      setCurrVal(newCurrVal);
      setResult("L");
      return;
    };

    const checkForBoth = () => {
      for (let i = 0; i < 9; i += 3) {
        if (
          newBoard[i] == "X" &&
          newBoard[i + 1] == "X" &&
          newBoard[i + 2] == "X"
        ) {
          checkPlayer(i, i + 1, i + 2);
          return 1;
        } else if (
          newBoard[i] == "O" &&
          newBoard[i + 1] == "O" &&
          newBoard[i + 2] == "O"
        ) {
          checkComp(i, i + 1, i + 2);
          return 1;
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          newBoard[i] == "X" &&
          newBoard[i + 3] == "X" &&
          newBoard[i + 6] == "X"
        ) {
          checkPlayer(i, i + 3, i + 6);
          return 1;
        } else if (
          newBoard[i] == "O" &&
          newBoard[i + 3] == "O" &&
          newBoard[i + 6] == "O"
        ) {
          checkComp(i, i + 3, i + 6);
          return 1;
        }
      }
      if (newBoard[0] == "X" && newBoard[4] == "X" && newBoard[8] == "X") {
        checkPlayer(0, 4, 8);
        return 1;
      } else if (
        newBoard[0] == "O" &&
        newBoard[4] == "O" &&
        newBoard[8] == "O"
      ) {
        checkComp(0, 4, 8);
        return 1;
      }
      if (newBoard[2] == "X" && newBoard[4] == "X" && newBoard[6] == "X") {
        checkPlayer(2, 4, 6);
        return 1;
      } else if (
        newBoard[2] == "O" &&
        newBoard[4] == "O" &&
        newBoard[6] == "O"
      ) {
        checkComp(2, 4, 6);
        return 1;
      }
    };

    const checkDraw = (arr) => {
      if (arr.length == 0) {
        let newCurrVal = ["D", "D", "D", "D", "D", "D", "D", "D", "D"];
        setGameCompleted(1);
        setCurrVal(newCurrVal);
        setBoard([".", ".", ".", ".", ".", ".", ".", ".", "."]);
        setResult("D");
        return;
      }
    };

    //player turn
    let boxNo = evt.target.id;
    let flag = 0;
    for (let i of numbers) {
      if (i == boxNo) {
        flag = 1;
        break;
      }
    }
    if (!flag) {
      alert("Number already choosen");
      return;
    }
    let newNumbers = numbers.filter((items) => {
      return items != boxNo;
    });
    newBoard[boxNo] = "X";
    setBoard(newBoard);

    //check win condition for player

    if(checkForBoth()) {
      return;
    }

    //check draw condition
    checkDraw(newNumbers);

    //computer turn
    let compNo = newNumbers[Math.floor(Math.random() * newNumbers.length)];
    let newNumbers2 = newNumbers.filter((items) => {
      return items != compNo;
    });
    newBoard[compNo] = "O";
    setBoard(newBoard);

    //check win condition for computer
    if(checkForBoth()) {
      return;
    }

    //check draw condition
    checkDraw(newNumbers2);

    setNumbers(newNumbers2);
  };

  return (
    <>
      {/* page container  */}
      <div className="h-screen w-screen bg-[rgb(20,20,20)] flex flex-col items-center">
        {/* extra div and title and start again  */}
        <div className="w-full flex justify-between items-center px-[7rem]">
          <div className="w-[12rem]"></div>
          <div className="my-5 font-serif text-[2.8rem] text-pink-600">
            Let's Play Tic-Tac-Toe
          </div>
          <StartAgain handleReset={handleReset}></StartAgain>
        </div>

        {/* score and game container  */}
        <div className="flex items-center justify-center w-full gap-20">
          {/* you  */}
          <div className="flex flex-col items-center justify-center w-[15rem] h-[12rem] rounded-xl bg-green-300">
            <p className="font-serif text-[2.2rem]">Your Score</p>
            <p className="text-[2.5rem]">{yourScore}</p>
          </div>

          {/* game container  */}
          <Items
            passItems={board}
            handleClickEvent={handleClickEvent}
            currVal={currVal}
          ></Items>

          {/* comp score  */}
          <div className="flex flex-col items-center justify-center w-[15rem] h-[12rem] rounded-xl bg-green-300 text-center">
            <p className="font-serif text-[2.2rem]">Computer Score</p>
            <p className="text-[2.5rem]">{compScore}</p>
          </div>
        </div>

        {/* display message  */}
        {gameCompleted && <Message flag={result}></Message>}
      </div>
    </>
  );
}

export default App;
