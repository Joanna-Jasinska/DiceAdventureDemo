import { getDiceTypeIcon } from "data/icons";
import css from "./DiceIcon.module.css";

const getFrame = ({ value, type }) => {
  const style = value === undefined || value === -1 ? `${css.notRolled} ` : "";
  switch (type) {
    case "any":
      return `${style}${css.any}`;
    case "physical":
      return `${style}${css.physical}`;
    case "slashed":
      return `${style}${css.physical}`;
    case "smashed":
      return `${style}${css.physical}`;
    case "needle":
      return `${style}${css.physical}`;

    case "mana":
      return `${style}${css.trait}`;
    case "magic":
      return `${style}${css.magic}`;
    case "arcane":
      return `${style}${css.magic}`;
    case "toxic":
      return `${style}${css.magic}`;
    case "void":
      return `${style}${css.magic}`;
    case "rainbow":
      return `${style}${css.magic}`;

    case "elemental":
      return `${style}${css.elemental}`;
    case "heat":
      return `${style}${css.elemental}`;
    case "ice":
      return `${style}${css.elemental}`;
    case "shock":
      return `${style}${css.elemental}`;
    case "poison":
      return `${style}${css.elemental}`;

    case "speed":
      return `${style}${css.trait}`;
    case "strength":
      return `${style}${css.trait}`;
    case "dexterity":
      return `${style}${css.trait}`;
    case "perception":
      return `${style}${css.trait}`;
    case "wits":
      return `${style}${css.trait}`;
    case "stamina":
      return `${style}${css.trait}`;

    default:
      return `${style}${css.any}`;
  }
};
// const getColor = ({ value, diceMax = 6 }) => {
//   //   console.log(`getting color ${value} / ${diceMax}`);
//   if (!value || value === -1) return css.random;
//   const percentage = (100 * value) / diceMax;
//   if (percentage > 90) return css.full;
//   if (percentage > 49) return css.half;
//   return css.empty;
// };

export const DiceIcon = ({ value, diceMax, type }) => {
  return (
    <div
      className={`${css.dice} ${getFrame({ value, type })}`}
      // data-text={`${diceMax}`}
    >
      {value || diceMax || " "}{" "}
      <span className={css.icon}>{getDiceTypeIcon(type)}</span>
    </div>
  );
};
