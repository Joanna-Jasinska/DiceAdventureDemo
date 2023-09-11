// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
// import { Title } from "components/Phonebook/Title/Title";
import css from "./SkillSquare.module.css";
import { useCombat, useDungeon } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Skill } from "objects/Skill";
// import { useCombat } from "hooks";
// import { Skill } from "objects/Skill";

export const SkillSquare = ({
  name,
  itemId,
  icon,
  alt,
  tags = [""],
  lv = 1,
  selected = false,
  toggleSelect,
  dices,
  success = false,
  currentUses = -1,
  stats = [],
  skill = {
    name: "NO SKILL",
    txt: "-",
    id: "skill|id",
    displayCost: [],
  },
  statsTxT,
}) => {
  const [toDispatch, editToDispatch] = useState([]);
  const { inCombat, combat } = useCombat();
  const dispatch = useDispatch();

  const fireSkill = () => {
    if (success && toDispatch.length === 0) {
      console.log(`--------FIRING SKILL - ADDING TO DISPATCH--------`);
      editToDispatch([
        ...toDispatch.concat(Skill.execute(itemId, { combat }, success)),
      ]);
      // editToDispatch((prevToDispatch) => [
      //   ...prevToDispatch,
      //   Skill.execute(skill.id, { combat }, success),
      // ]);
    }
  };

  useEffect(() => {
    const runDispatch = async (toDispatch) => {
      for (const dispatchFunc of toDispatch) {
        if (dispatchFunc !== false) {
          await dispatch(dispatchFunc());
        }
      }
      editToDispatch([]);
    };

    if (toDispatch.length > 0) {
      runDispatch(toDispatch);
    }
  }, [toDispatch]);

  return (
    <div
      className={`${css.item} ${
        inCombat !== true || currentUses < 0
          ? css.display
          : success
          ? css.canFire
          : css.disabled
      } ${inCombat === true && currentUses === 0 ? css.spent : ""}`}
      id={itemId}
    >
      <Miniature url={icon} alt={alt || name} bgTxtBack={tags[0]} />
      <div
        key={`${name}btn${itemId}`}
        className={`${css.skillButton} `}
        onClick={fireSkill}
      >
        {alt}
      </div>
      <div className={css.bar}>
        <div className={css.iconBag}>
          {(skill.displayCost ? skill.displayCost : []).map((el, index) => {
            return <DiceIcon {...el} key={`${name}|${el.type}|${index}`} />;
          })}
        </div>

        <div className={css.text}>{skill.txt}</div>
        <span className={css.name}>{skill.name}</span>
      </div>
    </div>
  );
};
