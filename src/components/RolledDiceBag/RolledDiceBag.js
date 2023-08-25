import { useCombat } from "hooks";
import { RolledDice } from "components/RolledDice/RolledDice";
import css from "./RolledDiceBag.module.css";

import { useSelector } from "react-redux";
import { selectRolledDices } from "redux/combat/selectors";

export const RolledDiceBag = () => {
  const { rolledDices, dices, enemy } = useCombat();

  // const rolledDices = useSelector(selectRolledDices);

  return (
    <div className={css.diceBag}>
      {(rolledDices ? rolledDices : []).map((el, index) => {
        return <RolledDice {...el} key={`rolledDice|${el.type}|${index}`} />;
      })}
      {/* <RolledDice />
      <RolledDice value={5} />
      <RolledDice />
      <RolledDice selected={true} value={6} />
      <RolledDice />
      <RolledDice selected={true} />
      <RolledDice /> */}
    </div>
  );
};
