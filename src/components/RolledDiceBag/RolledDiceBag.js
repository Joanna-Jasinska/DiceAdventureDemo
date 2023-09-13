import { useCombat } from "hooks";
import { RolledDice } from "components/RolledDice/RolledDice";
import css from "./RolledDiceBag.module.css";

export const RolledDiceBag = () => {
  const { rolledDices } = useCombat();

  return (
    <div className={css.diceBag}>
      {(rolledDices ? rolledDices : []).map((el, index) => {
        return <RolledDice {...el} key={`rolledDice|${el.type}|${index}`} />;
      })}
    </div>
  );
};
