// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./Item.module.css";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import { StatIcon } from "components/StatIcon/StatIcon";
import { SkillSquare } from "components/SkillSquare/SkillSquare";

export const Item = ({
  name,
  id,
  icon,
  alt,
  tags = [""],
  lv = 1,
  selected = false,
  toggleSelect,
  dices,
  nondices,
  stats = [],
  skill = { name: "NO SKILL", txt: "-", id: "noskill" },
  // statsTxT,
}) => {
  return (
    <div className={css.item} id={id}>
      <Miniature
        url={icon}
        alt={alt || name}
        bgTxtFront={alt}
        bgTxtBack={tags[0]}
        children={<SkillSquare skill={skill} />}
      />
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
        {(nondices ? nondices : []).map((el, index) => {
          return (
            <StatIcon
              {...el}
              // diceMax={el.diceMax}
              // value={el.value}
              // icon={el.type}
              key={`${name}|${el.type}|${index}`}
            />
          );
        })}
        {(dices ? dices : stats).map((el, index) => {
          return (
            <DiceIcon
              {...el}
              // diceMax={el.diceMax}
              // value={el.value}
              // icon={el.type}
              key={`${name}|${el.type}|${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};
