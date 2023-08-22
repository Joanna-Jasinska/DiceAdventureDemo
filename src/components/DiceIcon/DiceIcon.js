import { getIcon } from "data/icons";
import css from "./DiceIcon.module.css";

const getColor = ({ value, diceMax = 6 }) => {
  //   console.log(`getting color ${value} / ${diceMax}`);
  if (!value || value === -1) return css.random;
  const percentage = (100 * value) / diceMax;
  if (percentage > 90) return css.full;
  if (percentage > 49) return css.half;
  return css.empty;
};

export const DiceIcon = ({ value, diceMax, icon }) => {
  return (
    <div className={`${css.dice} ${getColor({ value, diceMax })}`}>
      {value || diceMax || "?"}{" "}
      <span className={css.icon}>{getIcon(icon).icon}</span>
    </div>
  );
};
