import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Title } from "components/Title/Title";
import { useCombat, useDungeon } from "hooks";
import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { LevelUps } from "components/LevelUps/LevelUps";
import { enterSummary } from "redux/combat/operations";
import { useGame } from "hooks/useGame";
import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";
import css from "./Page.module.css";

export const SummaryPage = () => {
  const dispatch = useDispatch();
  const { inCombat } = useCombat();
  const { error, goldEarned, name, eventName, bg, lv, startedLv } =
    useDungeon();
  const { selectedDungeonId } = useGame();
  const levelUps = Math.max((lv || 0) - (startedLv || 0), 0);

  useEffect(() => {
    if (inCombat !== "summary") dispatch(enterSummary());
  }, [dispatch, inCombat]);

  return (
    <>
      {!inCombat ? (
        <Navigate to="/quickBattle" />
      ) : (
        <main className={`${css.main} ${css.center}`}>
          {error ? <span className={css.error}>{error}</span> : ""}
          <Title title={`Summary`} />
          <div className={`${css.wrap}`}>
            <DungeonSquare
              {...{
                name,
                eventName,
                id: selectedDungeonId,
                lv,
                background: bg,
                selected: "hide",
              }}
            />
            <PlayerAvatar />
            <BagOfGold gold={goldEarned} />
            <LevelUps lv={levelUps} />
          </div>
        </main>
      )}
    </>
  );
};

export default SummaryPage;
