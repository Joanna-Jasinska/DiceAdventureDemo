import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGameError } from "redux/game/selectors"; 
import { Title } from "components/Phonebook/Title/Title";
import { ItemList } from "components/ItemList/ItemList";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { DungeonList } from "components/DungeonList/DungeonList";
import {
  packEquipment,
  getReadyToEnter,
  startDungeonById,
} from "redux/dungeon/operations";
import { useGame } from "hooks/useGame";
import { Dungeon } from "objects/Dungeon";
import { selectEq } from "redux/eq/selectors";
import css from "./../components/Phonebook/Phonebook.module.css";
import { useDungeon } from "hooks";

export const QuickBattlePage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectGameError);
  // const { selectedDungeonId, currentDungeons } = useGame();
  // const { readyToEnter } = useDungeon();

  // const enterDungeon = (e) => {
  //   e.preventDefault();
  //   dispatch(getReadyToEnter());
  // };

  // useEffect(() => {
  //   if (readyToEnter) {
  //     dispatch(
  //       startDungeonById(
  //         Dungeon.getEventIdFromSelectedCurrentDungeon(
  //           selectedDungeonId,
  //           currentDungeons
  //         )
  //       )
  //     );
  //     dispatch(packEquipment());
  //   }
  // }, [dispatch, readyToEnter]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      {/* <Title title={"Quick Battle"} /> */}
      <DungeonList />
      <ItemList filters={{ selected: true }} />
    </main>
  );
};

export default QuickBattlePage;
