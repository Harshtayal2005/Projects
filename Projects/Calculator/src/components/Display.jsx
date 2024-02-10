import styles from "./Display.module.css";

const Display = ({ value }) => {
  return (
    <div className={styles.display}>
      <input type="text" className={styles.txtInput} value={value} readOnly />
    </div>
  );
};

export default Display;
