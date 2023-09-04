import { getDiceTypeIcon } from "data/icons";
import css from "./RolledDice.module.css";
import { useDispatch } from "react-redux";
import { toggleDiceSelection } from "redux/combat/operations";

const getColor = ({ value, diceMax = 6 }) => {
  //   console.log(`getting color ${value} / ${diceMax}`);
  if (!value || value === -1) return css.random;
  const percentage = (100 * value) / diceMax;
  if (percentage > 90) return css.full;
  if (percentage > 49) return css.half;
  return css.empty;
};

export const RolledDice = ({ value, diceMax, type, selected, id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleDiceSelection(id));
  };
  return (
    <div
      className={`${css.dice} ${getColor({ value, diceMax })} ${
        selected ? css.selected : ""
      }`}
      onClick={onClick}
    >
      {value || diceMax || "?"}{" "}
      <span className={css.icon}>{getDiceTypeIcon(type)}</span>
      <div className={css.diceMaxCover}>{diceMax}</div>
    </div>
  );
};
