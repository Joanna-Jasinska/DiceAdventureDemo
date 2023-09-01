// import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
import css from "./../components/Phonebook/Phonebook.module.css";
import { useCombat, useDungeon } from "hooks";
import { EnemyBody } from "components/EnemyBody/EnemyBody";
import { SkillList } from "components/SkillList/SkillList";
import { Background } from "components/Background/Background";
import { RolledDiceBag } from "components/RolledDiceBag/RolledDiceBag";
import { useEnemy } from "hooks/useEnemy";

export const CombatPage = () => {
  //   const dispatch = useDispatch();
  const { inCombat } = useCombat();
  const error = useSelector(selectError);
  // const enemyName = useEnemy().name;
  // const dungeonName = useDungeon().name;
  // const { lv } = useDungeon();
  // const dungeonEvName = useDungeon().eventName;

  return inCombat === "summary" ? (
    <Navigate to="/summary" />
  ) : (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      {
        !inCombat ? (
          <Navigate to="/dungeon" />
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
