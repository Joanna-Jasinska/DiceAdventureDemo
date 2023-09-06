import { getDiceTypeIcon } from "data/icons";
import css from "./PieceIcon.module.css";

const getColor = ({ required, allowed }) => {
  //   console.log(`getting color ${value} / ${diceMax}`);
  if (required) return css.required;
  if (allowed) return css.allowed;
  return css.neutral;
};

export const PieceIcon = ({ value, required, allowed }) => {
  return (
    <div
      className={`${css.dice} ${getColor({ required, allowed })}`}
      // data-text={`${diceMax}`}
    >
      {`${value || " "}`}
      <span className={css.icon}> </span>
    </div>
  );
};
