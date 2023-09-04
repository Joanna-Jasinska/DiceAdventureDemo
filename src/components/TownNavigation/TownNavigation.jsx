import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderNavBtn } from "../HeaderNavBtn/HeaderNavBtn";
import { updateItem } from "redux/eq/operations";
import { selectEq } from "redux/eq/selectors";
import { Dungeon } from "objects/Dungeon";
import { useDungeon } from "hooks";
import {
  packEquipment,
  getReadyToEnter,
  startDungeonById,
} from "redux/dungeon/operations";
import css from "./TownNavigation.module.css";
import { useGame } from "hooks/useGame";

export const TownNavigation = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectEq);
  const { selectedDungeonId, currentDungeons } = useGame();
  const { readyToEnter } = useDungeon();
  const selectedItems = [...items].filter((item) => {
    if (item.selected) return item.selected;
  });

  const selectFav = () => {};
  const deselectEQ = () => {
    selectedItems.forEach((el) => {
      if (el.selected)
        dispatch(
          updateItem({
            ...el,
            selected: false,
          })
        );
    });
  };

  const enterDungeon = (e) => {
    e.preventDefault();
    dispatch(getReadyToEnter());
  };

  useEffect(() => {
    if (readyToEnter) {
      dispatch(
        startDungeonById(
          Dungeon.getEventIdFromSelectedCurrentDungeon(
            selectedDungeonId,
            currentDungeons
          )
        )
      );
      dispatch(packEquipment());
    }
  }, [dispatch, readyToEnter]);

  return (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          <HeaderNavBtn to="/reset" display={"♻️"} />
          <HeaderNavBtn to="/eq" display={`${selectedItems.length}/5`} />
          <HeaderNavBtn to="/workshop" display={`🔨`} />
          {/* <HeaderNavBtn to="/alchemy" display={`⚗️`} /> */}
          <HeaderNavBtn
            to="/eq"
            display="✔️"
            crossed={true}
            onClick={deselectEQ}
          />
        </div>
        <div className={css.rightNav}>
          {(selectedItems.length > 0) & (selectedItems.length < 6) ? (
            <HeaderNavBtn
              to="/dungeon"
              display="Go⚔️"
              onClick={enterDungeon}
              // inactive={true}
            />
          ) : (
            <HeaderNavBtn to="/eq" display={`PackEQ`} warning={true} />
          )}

          <HeaderNavBtn to="/town" display="Caravan" />
          <HeaderNavBtn to="/quickBattle" display="Paths" />
        </div>
      </nav>
    </header>
  );
};
