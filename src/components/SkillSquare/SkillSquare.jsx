// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
// import { Title } from "components/Phonebook/Title/Title";
import css from "./SkillSquare.module.css";
import { useCombat } from "hooks";
// import { useCombat } from "hooks";
// import { Skill } from "objects/Skill";

export const SkillSquare = ({
  name,
  id,
  icon,
  alt,
  tags = [""],
  lv = 1,
  selected = false,
  toggleSelect,
  dices,
  success = false,
  stats = [],
  skill = {
    name: "NO SKILL",
    txt: "-",
    id: "skill|id",
    displayCost: [],
  },
  statsTxT,
}) => {
  const { inCombat } = useCombat();
  const fireSkill = () => {
    if (success) {
      console.log(`${skill.id} fired!`, success);
    }
  };
  return (
    <div
      className={`${css.item} ${
        inCombat !== true ? css.display : success ? css.canFire : css.disabled
      }`}
      id={id}
    >
      <Miniature url={icon} alt={alt || name} bgTxtBack={tags[0]} />
      <div
        key={`${name}btn${id}`}
        className={`${css.button} `}
        onClick={fireSkill}
      >
        {alt}
      </div>
      <div className={css.bar}>
        <div className={css.iconBag}>
          {(skill.displayCost ? skill.displayCost : []).map((el, index) => {
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

        <div className={css.text}>{skill.txt}</div>
        <span className={css.name}>{skill.name}</span>
      </div>
    </div>
  );
};
