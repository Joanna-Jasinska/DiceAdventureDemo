import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Title } from "components/Title/Title";
import { useCombat, useDungeon } from "hooks";
import css from "./Page.module.css";
import { Background } from "components/Background/Background";
import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { LevelUps } from "components/LevelUps/LevelUps";
import { enterSummary } from "redux/combat/operations";
import { useGame } from "hooks/useGame";
import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";

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
        <main
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "0.4em 0px",
            minHeight: "76vh",
          }}
        >
          {error ? <span className={css.error}>{error}</span> : ""}
          <Background />
          <Title title={`Summary`} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
            }}
          >
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
