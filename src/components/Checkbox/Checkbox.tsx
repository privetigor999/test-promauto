import React from "react";
import styles from "./styles.module.scss";

export const Checkbox: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div>
      <h3>Задание 2: кастомный чекбокс</h3>
      <label>
        <input
          type="checkbox"
          className={styles.originalCheckbox}
          onChange={() => {
            setIsChecked((prev) => !prev);
          }}
        />
        <span className={styles.customCheckbox} />
        кастомный чекбокс
      </label>
    </div>
  );
};
