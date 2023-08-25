import { getIcon } from "data/icons";
import css from "./RolledDice.module.css";
import { useDispatch } from "react-redux";
import { selectDice } from "redux/combat/operations";

const getColor = ({ value, diceMax = 6 }) => {
  //   console.log(`getting color ${value} / ${diceMax}`);
  if (!value || value === -1) return css.random;
  const percentage = (100 * value) / diceMax;
  if (percentage > 90) return css.full;
  if (percentage > 49) return css.half;
  return css.empty;
};

export const RolledDice = ({ value, diceMax, icon, selected, id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(selectDice(id));
  };
  return (
    <div
      className={`${css.dice} ${getColor({ value, diceMax })} ${
        selected ? css.selected : ""
      }`}
      onClick={onClick}
    >
      {value || diceMax || "?"}{" "}
      <span className={css.icon}>{getIcon(icon).icon}</span>
    </div>
  );
};
