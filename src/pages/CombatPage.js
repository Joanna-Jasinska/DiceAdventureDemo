// import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import css from "./Page.module.css";
import { useCombat } from "hooks";
import { EnemyBody } from "components/EnemyBody/EnemyBody";
import { SkillList } from "components/SkillList/SkillList";
// import { Background } from "components/Background/Background";
import { RolledDiceBag } from "components/RolledDiceBag/RolledDiceBag";
import { selectEnemyLife } from "redux/enemy/selectors";
import { selectLoading as selectDungeonLoading } from "redux/dungeon/selectors";
import { selectLoading } from "redux/combat/selectors";
import { Loader } from "components/Loader/Loader";

export const CombatPage = () => {
  const { inCombat } = useCombat();
  const error = useSelector(selectGameError);
  const enemyLife = useSelector(selectEnemyLife);
  const dungeonLoading = useSelector(selectDungeonLoading);
  const combatLoading = useSelector(selectLoading);

  return inCombat === "summary" ? (
    <Navigate to="/summary" />
  ) : dungeonLoading || combatLoading ? (
    <Loader />
  ) : (
    <main className={css.main}>
      {error ? <span className={css.error}>{error}</span> : ""}
      {
        !inCombat ? (
          <Navigate to="/dungeon" />
        ) : enemyLife < 1 ? (
          <Navigate to="/return" />
        ) : (
          <>
            {/* <Background /> */}
            {/* <AAATester /> */}
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
