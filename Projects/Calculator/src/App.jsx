import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import Buttons from "./components/Buttons.jsx";
import { useState } from "react";

function App() {
  const [currVal, setCurrVal] = useState("");
  const onButtonClicked = (value) => {
    if (value === "C") {
      setCurrVal("");
    } else if (value === "=") {
      const result = eval(currVal);
      setCurrVal(result);
    } else {
      const newVal = currVal + value;
      setCurrVal(newVal);
    }
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <Display value={currVal}></Display>
          <Buttons onButtonClicked={onButtonClicked}></Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
