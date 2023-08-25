import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
// import { Item } from "components/Item/Item";
import { ItemList } from "components/ItemList/ItemList";
import css from "./../components/Phonebook/Phonebook.module.css";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";
import { AllySquare } from "components/AllySquare/AllySquare";
import { DungeonList } from "components/DungeonList/DungeonList";
import {
  startRandomDungeon,
  packEquipment,
  readyToEnter,
} from "redux/dungeon/operations";
import { selectReadyToEnter } from "redux/dungeon/selectors";
import { beginCombat, rollAllDices } from "redux/combat/operations";
import { loadEnemy } from "redux/enemy/operations";

export const QuickBattlePage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const enteringDungeon = useSelector(selectReadyToEnter);

  const enterDungeon = (e) => {
    e.preventDefault();
    dispatch(readyToEnter());
  };

  useEffect(() => {
    if (enteringDungeon) {
      dispatch(startRandomDungeon());
      dispatch(packEquipment());
    }
  }, [dispatch, enteringDungeon]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}

      <Title title={"Quick Battle"} />
      <HeaderNavBtn
        to="/dungeon"
        display="Equip 5 & Enter"
        disabled={true}
        onClick={enterDungeon}
      />
      <HeaderNavBtn
        to="/dungeon"
        display="Enter Dungeon"
        onClick={enterDungeon}
      />
      <DungeonList />
      <ItemList filters={{ selected: true }} />
    </main>
  );
};

export default QuickBattlePage;
