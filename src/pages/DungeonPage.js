import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectGameError } from "redux/game/selectors";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { engageEnemyBySlot } from "redux/dungeon/operations";
import { useCombat, useDungeon } from "hooks";
import { beginCombat } from "redux/combat/operations";
import { loadEnemy } from "redux/enemy/operations";
import { Background } from "components/Background/Background";
import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import { SkillList } from "components/SkillList/SkillList";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { DungeonLevelUps } from "components/DungeonLevelUps/DungeonLevelUps";
import css from "./../components/Phonebook/Phonebook.module.css";
import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";
import { useGame } from "hooks/useGame";

export const DungeonPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectGameError);
  const { name, eventName, bg, lv, slotsDefeated } = useDungeon();
  const { selectedDungeonId } = useGame();
  const { inCombat } = useCombat();

  // const n = getRandomNum(0,4);
  const beginBattleBySlot = (n) => {
    dispatch(engageEnemyBySlot(n))
      .then(() => {
        dispatch(loadEnemy())
          .then(() => {
            dispatch(beginCombat({}))
              .then(() => {
                // began combat successfully
              })
              .catch((error) => {
                // did not begin combat
              });
          })
          .catch((error) => {
            // not loaded enemy
          });
      })
      .catch((error) => {
        // not engaged enemy
      });
  };
  const beginBattle = () => {
    // fight boss
  };

  <Navigate to="/combat" />;
  return (
    <>
      {inCombat ? (
        <Navigate to="/combat" />
      ) : (
        <main
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "0px",
            minHeight: "76vh",
            // display: "flex",
            // flexWrap: "wrap",
            // gap: "0.4rem",
          }}
        >
          {error ? <span className={css.error}>{error}</span> : ""}
          <Background />
          {/* <Title
            title={`${name} ${eventName}${
              inDungeon ? " entered." : " illegal breach. Go back!"
            }`}
          /> */}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              marginBottom: "0.5rem",
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

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                paddingTop: "1rem",
              }}
            >
              <HeaderNavBtn
                to="/combat"
                display={`${bg.icon}`}
                onClick={() => beginBattleBySlot(0)}
                completed={slotsDefeated[0]}
                disabled={slotsDefeated[0]}
              />
              <HeaderNavBtn
                to="/combat"
                display={`${bg.eventIcon}`}
                onClick={() => beginBattleBySlot(1)}
                completed={slotsDefeated[1]}
                disabled={slotsDefeated[1]}
              />
              <HeaderNavBtn
                to="/combat"
                display={`${bg.flavorIcon}`}
                onClick={() => beginBattleBySlot(2)}
                completed={slotsDefeated[2]}
                disabled={slotsDefeated[2]}
              />
              <HeaderNavBtn
                to="/combat"
                display="Boss ☠️"
                onClick={beginBattle}
                completed={slotsDefeated[3]}
                disabled={slotsDefeated[3]}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.4rem",
            }}
          >
            <PlayerAvatar />
            <BagOfGold />
            <DungeonLevelUps />
          </div>
          <SkillList />
        </main>
      )}
    </>
  );
};

export default DungeonPage;
