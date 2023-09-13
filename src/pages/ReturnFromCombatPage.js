import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "components/Title/Title";
import {
  getEnemyGold,
  levelupAndReloadDungeon,
} from "redux/dungeon/operations";
import { clearCombat } from "redux/combat/operations";
import { Navigate, useNavigate } from "react-router-dom";
import { useCombat, useDungeon } from "hooks";
import { useEnemy } from "hooks/useEnemy";
import { LvUpDungeonById, playerLvUp } from "redux/game/operations";
import { Loader } from "components/Loader/Loader";
import { Background } from "components/Background/Background";

export const ReturnFromCombatPage = () => {
  const dispatch = useDispatch();
  const { inCombat } = useCombat();
  const { slotsDefeated, player, dungeonId } = useDungeon();
  const { life } = player;
  const { enemyLife } = useEnemy();
  const navigate = useNavigate();
  const dungeonVictory = ![...Object.values(slotsDefeated)].some(
    (slot) => slot === false
  );
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoading);

  useEffect(() => {
    console.log(` ReturnFromCombatPage rendering START`);
    return () => console.log(` ReturnFromCombatPage rendering END`);
  }, []);

  useEffect(() => {
    if (inCombat && (enemyLife < 1 || life < 1)) {
      if (enemyLife < 1) {
        dispatch(clearCombat()).finally(() => {
          dispatch(getEnemyGold()).finally(() => {
            //
          });
        });
      }
      if (life < 1 && inCombat === true) {
        console.log(`Return page: player life [${life}]`);
        const runDispatch = async (toDispatch) => {
          for (const func of toDispatch) {
            await dispatch(func());
          }
        };
        runDispatch([
          clearCombat,
          () => {
            navigate("/summary");
          },
        ]);
      }
      return;
    }
    if (dungeonVictory) {
      dispatch(playerLvUp());
      dispatch(LvUpDungeonById(dungeonId));
      dispatch(levelupAndReloadDungeon());
    }
  }, [
    dispatch,
    inCombat,
    dungeonVictory,
    enemyLife,
    life,
    dungeonId,
    navigate,
  ]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      <Navigate to="/town" />
      <Background />
      <Loader />
      <Title title="Picking up gold.." />
    </main>
  );
};

export default ReturnFromCombatPage;
