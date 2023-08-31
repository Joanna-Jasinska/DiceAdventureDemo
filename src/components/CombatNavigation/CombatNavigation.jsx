import { HeaderNavBtn } from "../HeaderNavBtn/HeaderNavBtn";
import { useSelector, useDispatch } from "react-redux";
// import { selectItems } from "redux/game/selectors";
// import { updateItem } from "redux/game/operations";
import {
  copyAllEnemyDicesToBag,
  deselectAllDices,
} from "redux/combat/operations";
import css from "./CombatNavigation.module.css";
import { useDungeon } from "hooks";
import { deleteAllBodyDices } from "redux/enemy/operations";
import { useEnemy } from "hooks/useEnemy";

export const CombatNavigation = () => {
  const dispatch = useDispatch();
  const { player } = useDungeon();
  const { life, maxLife } = player;
  const { body } = useEnemy();

  const deselectAll = (e) => {
    e.preventDefault();
    dispatch(deselectAllDices());
  };
  const retrieveAllDices = (e) => {
    e.preventDefault();
    dispatch(copyAllEnemyDicesToBag());
    dispatch(deleteAllBodyDices());
  };
  const nothing = (e) => {
    e.preventDefault();
  };
  const negatives = body
    .map((piece) => {
      const dmgToPlayer = `${
        piece.damages.damageToPlayer ? `❤️x${piece.damages.damageToPlayer}` : ""
      }`;
      const effToPlayer = `${
        piece.damages.effectsToPlayer
          ? `❗️❔x${piece.damages.effectsToPlayer}`
          : ""
      }`;
      return piece.fulfilled ? "" : dmgToPlayer + effToPlayer;
    })
    .join("");
  const positives = body
    .map((piece) => {
      const dmgToEnemy = `${
        piece.damages.damageToEnemy ? `⚔️x${piece.damages.damageToEnemy}` : ""
      }`;
      const effToEnemy = `${
        piece.damages.effectsToEnemy ? `❔x${piece.damages.effectsToEnemy}` : ""
      }`;
      return !piece.fulfilled ? "" : dmgToEnemy + effToEnemy;
    })
    .join("");
  // damages: {
  //   damageToPlayer: 0,
  //   effectsToPlayer: false,
  //   damageToEnemy: 0,
  //   effectsToEnemy: false,
  // },
  const endTurnIcon = negatives !== "" ? "❌" : "✔️"; //✔️❌
  const endTurnDmg = negatives !== "" ? negatives : positives; //⚔️❤️
  // const consequences = "good"; //color ?
  //   ✔️❌☠️
  // ⚙️💀☠️🩸❤️⚔️👍

  return (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          <HeaderNavBtn to="/reset" display={"♻️"} />
          <HeaderNavBtn
            to="/-"
            display={`${life}❤️${maxLife}`}
            onClick={nothing}
          />
          <HeaderNavBtn
            to="/eq"
            display="🎲"
            crossed={true}
            onClick={deselectAll}
          />
          <HeaderNavBtn to="/eq" display="🎲⭯" onClick={retrieveAllDices} />
        </div>
        <div className={css.rightNav}>
          <HeaderNavBtn to="/return" display="🏃 Town" />
          <HeaderNavBtn
            to="/-"
            display={`${endTurnIcon} End Turn ${endTurnDmg}`}
            onClick={nothing}
          />
        </div>
      </nav>
    </header>
  );
};
