// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./Item.module.css";
import { DiceIcon } from "components/DiceIcon/DiceIcon";

export const Item = ({
  name,
  id,
  desc,
  icon,
  alt,
  tags,
  lv = 1,
  selected = false,
  toggleSelect,
  dices,
  stats = [],
}) => {
  return (
    <div className={css.item} id={id}>
      <Miniature url={icon} alt={alt || name} />
      <div className={css.bar}>
        <button
          key={`${name}btn${id}`}
          className={`${css.button} ${selected ? css.selected : ""} ${
            css.delete
          }`}
          type="button"
          onClick={toggleSelect}
        >
          {selected ? "✔️" : "+"}
        </button>
        <span className={css.text}>
          <span className={css.level}>{`${lv} `}</span>
          <span className={css.name}>{name + " "}</span>
        </span>
      </div>
      <div className={css.iconBag}>
        {(dices ? dices : stats).map((el, index) => {
          return (
            <DiceIcon
              diceMax={el.diceMax}
              value={el.value}
              icon={el.type}
              key={`${name}|${el.type}|${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};
