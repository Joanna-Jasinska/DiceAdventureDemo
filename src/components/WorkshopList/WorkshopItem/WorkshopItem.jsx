// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./WorkshopItem.module.css";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import { Title } from "components/Phonebook/Title/Title";

export const WorkshopItem = ({
  name,
  id,
  icon,
  alt,
  tags = [""],
  lv = 1,
  selected = false,
  toggleSelect,
  dices,
  stats = [],
  skill = { name: "NO SKILL", txt: "-", id: "noskill" },
  statsTxT,
}) => {
  return (
    <div className={css.WorkshopItem} id={id}>
      <Miniature
        url={icon}
        alt={alt || name}
        bgTxtFront={alt}
        bgTxtBack={tags[0]}
        children={
          <>
            {`${skill.name}`}
            <br />
            {`${skill.txt}`}
            <Title title={`${alt} ${name}`} />
          </>
        }
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
