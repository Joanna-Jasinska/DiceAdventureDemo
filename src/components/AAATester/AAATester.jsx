import { evaluateSkill } from "data/skillEvaluation";
import css from "./AAATester.module.css";
import { useGame } from "hooks/useGame";
import { useCombat } from "hooks";
import { Skill } from "objects/Skill";
// import { useEffect } from "react";
export const AAATester = () => {
  //   const { game } = useGame();
  const { combat } = useCombat();
  const success = Skill.usedDices("Lucky Clover|LUCKY ROLL|", { combat });

  return (
    <div className={`${css.test} ${success ? css.success : css.failure}`}>
      {success}
      {/* <br />
      {`${success}`} */}
    </div>
  );
};
