import { getDiceTypeIcon } from "data/icons";
import css from "./StatIcon.module.css";

// const getColor = ({ type, maxHp='' }) => {
//   //   console.log(`getting color ${value} / ${diceMax}`);
//   if (!value || value === -1) return css.random;
//   const percentage = (100 * value) / diceMax;
//   if (percentage > 90) return css.full;
//   if (percentage > 49) return css.half;
//   return css.empty;
// };

export const StatIcon = ({ type, maxHp = "" }) => {
  return (
    <div
      // className={`${css.dice} ${getColor({ value, diceMax })}`}
      className={`${css.stat}`}
      // data-text={`${diceMax}`}
    >
      {maxHp} <span className={css.icon}>{getDiceTypeIcon(type)}</span>
    </div>
  );
};
