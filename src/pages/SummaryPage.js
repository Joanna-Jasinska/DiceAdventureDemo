import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectGameError } from "redux/game/selectors";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { Title } from "components/Phonebook/Title/Title";
import { useCombat, useDungeon } from "hooks";
import css from "./../components/Phonebook/Phonebook.module.css";
import { Background } from "components/Background/Background";
import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { LevelUps } from "components/LevelUps/LevelUps";
import { enterSummary } from "redux/combat/operations";
import { useGame } from "hooks/useGame";
import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";

export const SummaryPage = () => {
  const dispatch = useDispatch();
  // const error = useSelector(selectGameError);
  // const loading = useSelector(selectLoading);
  const { inCombat } = useCombat();
  const {
    error,
    goldEarned,
    name,
    eventName,
    bg,
    packedItems,
    ally,
    loading,
    inDungeon,
    player,
    lv,
    startedLv,
  } = useDungeon();
  const { selectedDungeonId } = useGame();
  const levelUps = Math.max((lv || 0) - (startedLv || 0), 0);

  useEffect(() => {
    if (inCombat !== "summary") dispatch(enterSummary());
  }, [dispatch, inCombat]);

  // useEffect(() => {
  //   dispatch(resetGame());
  // }, [dispatch]);

  // const n = getRandomNum(0,4);
  // const beginBattleBySlot = (n) => {
  //   dispatch(engageEnemyBySlot(n))
  //     .then(() => {
  //       // began combat successfully
  //     })
  //     .catch((error) => {
  //       // did not begin combat
  //     });
  // };

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
