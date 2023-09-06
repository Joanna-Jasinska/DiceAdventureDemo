import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "components/Phonebook/Title/Title";
import {
  clearDungeon,
  getEnemyGold,
  levelupAndReloadDungeon,
  resetPlayer,
} from "redux/dungeon/operations";
import { clearCombat } from "redux/combat/operations";
import { Navigate, useNavigate } from "react-router-dom";
import { useCombat, useDungeon } from "hooks";
import { useEnemy } from "hooks/useEnemy";
import {
  LvUpDungeonById,
  gainFromDungeonSummary,
  playerLvUp,
} from "redux/game/operations";

export const ReturnFromCombatPage = () => {
  const dispatch = useDispatch();
  const { endCombat, inCombat } = useCombat();
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
            // return resetPlayer();
          },
          // gainFromDungeonSummary,
          // clearDungeon,
        ]);
        // navigate("/summary");
        // dispatch(gainFromDungeonSummary()).then(() => {
        //   dispatch(clearDungeon());
        //   dispatch(clearCombat());
        // });
      }
      // });
      return;
    }
    if (dungeonVictory) {
      // console.log(`dungeonVictory [${dungeonVictory}] Dungeon ID [${dungeonId}]`);
      // gain spare levelup
      // load dungeon without loosing level and gold streak
      dispatch(playerLvUp());
      dispatch(LvUpDungeonById(dungeonId));
      dispatch(levelupAndReloadDungeon());
    } else {
      // console.log(`Dungeon in progress, victory [${dungeonVictory}]: found`, [
      //   ...Object.values(slotsDefeated),
      // ]);
    }
  }, [dispatch, inCombat, dungeonVictory, enemyLife, life, dungeonId]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      <Navigate to="/town" />
      <Title title="Picking up gold" />
    </main>
  );
};

export default ReturnFromCombatPage;
