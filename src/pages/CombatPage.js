// import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import css from "./../components/Phonebook/Phonebook.module.css";
import { useCombat, useDungeon } from "hooks";
import { EnemyBody } from "components/EnemyBody/EnemyBody";
import { SkillList } from "components/SkillList/SkillList";
import { Background } from "components/Background/Background";
import { RolledDiceBag } from "components/RolledDiceBag/RolledDiceBag";
import { useEnemy } from "hooks/useEnemy";
import { selectEnemyLife } from "redux/enemy/selectors";
import {
  selectLoading as selectDungeonLoading,
  selectPlayerLife,
} from "redux/dungeon/selectors";
import { selectLoading } from "redux/combat/selectors";
import { Loader } from "components/Loader/Loader";

export const CombatPage = () => {
  //   const dispatch = useDispatch();
  const { inCombat } = useCombat();
  const error = useSelector(selectGameError);
  const enemyLife = useSelector(selectEnemyLife);
  const playerLife = useSelector(selectPlayerLife);
  const dungeonLoading = useSelector(selectDungeonLoading);
  const combatLoading = useSelector(selectLoading);
  // const enemyName = useEnemy().name;
  // const dungeonName = useDungeon().name;
  // const { lv } = useDungeon();
  // const dungeonEvName = useDungeon().eventName;

  return dungeonLoading || combatLoading ? (
    <Loader />
  ) : inCombat === "summary" ? (
    <Navigate to="/summary" />
  ) : (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      {
        !inCombat ? (
          <Navigate to="/dungeon" />
        ) : enemyLife < 1 ? (
          <Navigate to="/return" />
        ) : (
          <>
            <Background />
            {/* <Title title={`Combat`} /> */}
            {/* <Title title={`Lv.${lv} ${dungeonName} ${dungeonEvName}`} /> */}
            {/* <EnemyPortrait /> */}

            <EnemyBody />
            <RolledDiceBag />
            <SkillList />
          </>
        ) // end of combat page
      }
    </main>
  );
};

export default CombatPage;
