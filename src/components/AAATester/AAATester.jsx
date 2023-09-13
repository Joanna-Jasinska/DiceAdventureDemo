import css from "./AAATester.module.css";
import { useCombat } from "hooks";
import { Skill } from "objects/Skill";
export const AAATester = () => {
  const { combat } = useCombat();
  const success = Skill.usedDices("Lucky Clover|LUCKY ROLL|", { combat });

  return (
    <div className={`${css.test} ${success ? css.success : css.failure}`}>
      {success}
    </div>
  );
};
