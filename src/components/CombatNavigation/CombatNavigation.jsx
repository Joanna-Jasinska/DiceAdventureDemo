import { HeaderNavBtn } from "../HeaderNavBtn/HeaderNavBtn";
import { useDispatch } from "react-redux";
import {
  clearCombat,
  copyAllEnemyDicesToBag,
  rollAllDices,
} from "redux/combat/operations";
import css from "./CombatNavigation.module.css";
import { useCombat, useDungeon } from "hooks";
import { damageEnemy, deleteAllBodyDices } from "redux/enemy/operations";
import { useEnemy } from "hooks/useEnemy";
import { EnemyPortrait } from "components/EnemyPortrait/EnemyPortrait";
import { gainFromDungeonSummary } from "redux/game/operations";
import {
  clearDungeon,
  damagePlayer,
  endTurnInDungeon,
} from "redux/dungeon/operations";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDiceTypeIcon } from "data/icons";

export const CombatNavigation = () => {
  const dispatch = useDispatch();
  const { player } = useDungeon();
  const { life, maxLife } = player;
  const { body, gold, enemyLife } = useEnemy();
  const { inCombat } = useCombat();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // const deselectAll = (e) => {
  //   e.preventDefault();
  //   dispatch(deselectAllDices());
  // };

  const retrieveAllDices = (e) => {
    e.preventDefault();
    dispatch(copyAllEnemyDicesToBag());
    dispatch(deleteAllBodyDices());
  };
  // const killEnemy = (e) => {
  //   e.preventDefault();
  //   dispatch(die());
  // };
  const exitDungeon = (e) => {
    e.preventDefault();
    dispatch(gainFromDungeonSummary()).then(() => {
      dispatch(clearDungeon());
      dispatch(clearCombat());
    });
  };
  const nothing = (e) => {
    e.preventDefault();
  };
  const endTurn = (e) => {
    e.preventDefault();
    const runDispatch = async (toDispatch) => {
      for (const func of toDispatch) {
        await dispatch(func());
      }
    };
    let dmgToPlayer = 0;
    let effToPlayer = [];
    let dmgToEnemy = 0;
    let effToEnemy = [];
    body.forEach((piece) => {
      if (!piece.fulfilled) {
        dmgToPlayer += piece.damages.damageToPlayer || false;
        effToPlayer = effToPlayer.concat(
          piece.damages.effectsToPlayer || false
        );
      } else {
        dmgToEnemy += piece.damages.damageToEnemy || false;
        effToEnemy = effToEnemy.concat(piece.damages.effectsToEnemy || false);
      }
    });
    // !!!AAA!!! to do:
    // apply player status
    // apply enemy status
    runDispatch([
      () => damagePlayer(dmgToPlayer),
      () => damageEnemy(dmgToEnemy),
      deleteAllBodyDices,
      rollAllDices,
      endTurnInDungeon,
    ]);
  };
  let negNum = 0;
  let effToPlayer = "";
  let posNum = 0;
  let effToEnemy = "";
  body.forEach((piece) => {
    if (piece.damages.damageToPlayer && !piece.fulfilled)
      negNum += piece.damages.damageToPlayer;
    if (piece.damages.damageToEnemy && piece.fulfilled)
      posNum += piece.damages.damageToEnemy;
    if (piece.damages.effectsToPlayer && !piece.fulfilled)
      effToPlayer += `❗️❔x${piece.damages.effectsToPlayer}`;
    if (piece.damages.effectsToEnemy && piece.fulfilled)
      effToEnemy += `❗️❔x${piece.damages.effectsToEnemy}`;
  });
  const negatives = `${negNum === 0 ? "" : "-" + negNum + "❤️"}${
    effToPlayer === "" ? "" : effToPlayer
  }`;
  const positives = `${
    posNum === 0 ? "" : getDiceTypeIcon("playerAttack") + "x" + posNum
  }${effToEnemy === "" ? "" : effToEnemy}`;

  const endTurnIcon = negatives !== "" ? "❌" : "✔️"; //✔️❌
  const endTurnDmg = negatives !== "" ? `${negatives} ${positives}` : positives; //⚔️❤️
  //   ✔️❌☠️
  // ⚙️💀☠️🩸❤️⚔️👍

  useEffect(() => {
    if (inCombat !== "summary" && (enemyLife < 1 || life < 1))
      navigate("/return");
  }, [life, enemyLife, navigate, inCombat]);

  return (
    <header className={`header ${css.header}`}>
      {pathname === "/" || pathname === "/tutorial" || pathname === "/bye" ? (
        ""
      ) : inCombat === "summary" ? (
        <nav className={css.header}>
          <div className={css.leftNav}>
            {/* <HeaderNavBtn to="/reset" display={"♻️"} /> */}
            <HeaderNavBtn
              to="/-"
              display={`${life}❤️${maxLife}`}
              onClick={nothing}
            />
          </div>
          <div className={css.rightNav}>
            <HeaderNavBtn
              to="/-"
              display="🏃Leave Path"
              onClick={exitDungeon}
            />
          </div>
        </nav>
      ) : (
        <nav className={css.header}>
          <div className={css.leftNav}>
            <HeaderNavBtn
              to="/-"
              display={`${life}❤️${maxLife}`}
              styles={{ whiteSpace: "nowrap" }}
              onClick={nothing}
            />
            <HeaderNavBtn
              to="/-"
              display={`${getDiceTypeIcon(
                "playerAttack"
              )}${enemyLife} 💰${gold}`}
              styles={{ whiteSpace: "nowrap" }}
              onClick={nothing}
            />
            <HeaderNavBtn
              to="/-"
              display="Dices Out 🎲⭯"
              onClick={retrieveAllDices}
            />
            {/* <HeaderNavBtn to="/reset" display={"♻️"} /> */}
            {/* <HeaderNavBtn
              to="/-"
              display="🎲"
              crossed={true}
              onClick={deselectAll}
            /> */}
          </div>
          <EnemyPortrait />
          <div className={css.rightNav}>
            <HeaderNavBtn
              to="/-"
              display={`${endTurnIcon} End Turn ${endTurnDmg}`}
              onClick={endTurn}
              warning={negatives !== ""}
              recommended={negatives === ""}
              // styles={endTurnBtnStyle}
            />
            <HeaderNavBtn to="/summary" display="🏃Leave Path" />
            {/* <HeaderNavBtn
              to="/-"
              display="Win"
              onClick={killEnemy}
              inactive={true}
            /> */}
          </div>
        </nav>
      )}
    </header>
  );
};
