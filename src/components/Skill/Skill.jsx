// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import { Title } from "components/Phonebook/Title/Title";
import css from "./Skill.module.css";

export const Skill = ({
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
  skill = {
    name: "NO SKILL",
    txt: "-",
    id: "skill|id",
  },
  statsTxT,
}) => {
  return (
    <div className={css.item} id={id}>
      <Miniature
        url={icon}
        alt={alt || name}
        // bgTxtFront={alt}
        bgTxtBack={tags[0]}
        // children={
        //   <>
        //     {desc}
        //     <Title title={`${alt} ${name}`} />
        //   </>
        // }
      />
      <div className={css.bar}>
        <div key={`${name}btn${id}`} className={`${css.button} ${css.delete}`}>
          {alt}
        </div>

        <span className={css.text}>
          {skill.name}
          <br /> {skill.txt}
          {/* <span className={css.name}></span> */}
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
