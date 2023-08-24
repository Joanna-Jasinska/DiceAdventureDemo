import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectError } from "redux/auth/selectors";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { startRandomDungeon, packEquipment } from "redux/dungeon/operations";
// import { Item } from "components/Item/Item";
import { ItemList } from "components/ItemList/ItemList";
import { Title } from "components/Phonebook/Title/Title";
import { useCombat, useDungeon } from "hooks";
import css from "./../components/Phonebook/Phonebook.module.css";
import { beginCombat } from "redux/combat/operations";
import { selectInCombat } from "redux/combat/selectors";
import { Background } from "components/Background/Background";

export const DungeonPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { name, eventName, inDungeon} = useDungeon();
  const { inCombat } = useCombat();
  // const enteringCombat = useSelector(selectReadyToEnterCombat);
  const enteringCombat = false;

  // const enterDungeon = (e) => {
  //   e.preventDefault();
  //   dispatch(readyToEnter());
  // };

  // useEffect(() => {
  //   if (enteringDungeon) {
  //     dispatch(startRandomDungeon());
  //     dispatch(packEquipment());
  //   }
  // }, [dispatch, enteringDungeon]);

  // useEffect(() => {
  //   if (enteringCombat) {
  //     const newBattle={};
  //      dispatch(initiateCombat(newBattle));
  //   }
  // }, [dispatch, enteringCombat]);

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
            to="/town"
            display="🏃 Leave dung. 💩"
            onClick={() => {}}
          />
          <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
          <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
          <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
          <HeaderNavBtn
            to="/combat"
            display="⚔️"
            onClick={() => {
              dispatch(beginCombat({}));
            }}
          />
        </main>
      )}
    </>
  );
};

export default DungeonPage;
