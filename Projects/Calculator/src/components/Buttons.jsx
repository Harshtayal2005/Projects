import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClicked }) => {
  let arr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttons}>
      {arr.map((items) => (
        <button
          key={items}
          className={styles.btn}
          onClick={() => onButtonClicked(items)}
        >
          {items}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
