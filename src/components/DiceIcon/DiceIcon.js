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
      return `${style}${css.magic}`;
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

    case "trait":
      return `${style}${css.trait}`;
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

export const DiceIcon = ({ value, diceMax, type }) => {
  return (
    <div className={`${css.dice} ${getFrame({ value, type })}`}>
      {value || diceMax || " "}{" "}
      <span className={css.icon}>{getDiceTypeIcon(type)}</span>
    </div>
  );
};
