import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectError } from "redux/auth/selectors";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { engageEnemyBySlot } from "redux/dungeon/operations";
import { Title } from "components/Phonebook/Title/Title";
import { useCombat, useDungeon } from "hooks";
import { beginCombat } from "redux/combat/operations";
import { loadEnemy } from "redux/enemy/operations";
import { Background } from "components/Background/Background";
import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import { SkillList } from "components/SkillList/SkillList";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { DungeonLevelUps } from "components/DungeonLevelUps/DungeonLevelUps";
import css from "./../components/Phonebook/Phonebook.module.css";

export const DungeonPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { name, eventName, inDungeon } = useDungeon();
  const { inCombat } = useCombat();
  const { bg } = useDungeon();

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
    // dispatch(engageRandomEnemy())
    //   .then(() => {
    //     dispatch(loadEnemy())
    //       .then(() => {
    //         dispatch(beginCombat({}))
    //           .then(() => {
    //             // began combat successfully
    //           })
    //           .catch((error) => {
    //             // did not begin combat
    //           });
    //       })
    //       .catch((error) => {
    //         // not loaded enemy
    //       });
    //   })
    //   .catch((error) => {
    //     // not engaged enemy
    //   });
  };

  return (
    <>
      {inCombat ? (
        <Navigate to="/combat" />
      ) : (
        <main
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "0.4em 0px",
            minHeight: "76vh",
            // display: "flex",
            // flexWrap: "wrap",
            // gap: "0.4rem",
          }}
        >
          {error ? <span className={css.error}>{error}</span> : ""}
          <Background />
          <Title
            title={`${name} ${eventName}${
              inDungeon ? " entered." : " illegal breach. Go back!"
            }`}
          />

          <HeaderNavBtn
            to="/combat"
            display={`${bg.icon}`}
            onClick={() => beginBattleBySlot(0)}
          />
          <HeaderNavBtn
            to="/combat"
            display={`${bg.eventIcon}`}
            onClick={() => beginBattleBySlot(1)}
          />
          <HeaderNavBtn
            to="/combat"
            display={`${bg.flavorIcon}`}
            onClick={() => beginBattleBySlot(2)}
          />
          <HeaderNavBtn to="/combat" display="⚔️" onClick={beginBattle} />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
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
