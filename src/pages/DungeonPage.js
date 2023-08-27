import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectError } from "redux/auth/selectors";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import {
  startRandomDungeon,
  packEquipment,
  engageRandomEnemy,
} from "redux/dungeon/operations";
import { Title } from "components/Phonebook/Title/Title";
import { useCombat, useDungeon } from "hooks";
import css from "./../components/Phonebook/Phonebook.module.css";
import { beginCombat } from "redux/combat/operations";
import { loadEnemy } from "redux/enemy/operations";
import { Background } from "components/Background/Background";
import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";

export const DungeonPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { name, eventName, inDungeon } = useDungeon();
  const { inCombat } = useCombat();
  const { bg } = useDungeon();

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
          }}
        >
          {error ? <span className={css.error}>{error}</span> : ""}
          <Background />
          <Title
            title={`${name} ${eventName}${
              inDungeon ? " entered." : " illegal breach. Go back!"
            }`}
          />
          <span>
            Life {"12"}/{"30"}
          </span>
          <span>Gold earned {"120"}</span>

          <HeaderNavBtn
            to="/combat"
            display={`${bg.icon}`}
            onClick={() => {}}
          />
          <HeaderNavBtn
            to="/combat"
            display={`${bg.eventIcon}`}
            onClick={() => {}}
          />
          <HeaderNavBtn
            to="/combat"
            display={`${bg.flavorIcon}`}
            onClick={() => {}}
          />
          <HeaderNavBtn
            to="/combat"
            display="⚔️"
            onClick={() => {
              dispatch(engageRandomEnemy())
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
            }}
          />

          <PlayerAvatar />
        </main>
      )}
    </>
  );
};

export default DungeonPage;
