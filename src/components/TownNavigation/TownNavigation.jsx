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
import { getDiceTypeIcon } from "data/icons";
import { useLocation } from "react-router-dom";

export const TownNavigation = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectEq);
  const { selectedDungeonId, currentDungeons } = useGame();
  const { readyToEnter } = useDungeon();
  const location = useLocation();
  const { pathname } = location;
  const selectedItems = [...items].filter((item) => {
    if (item.selected) return item.selected;
  });
  // const boxShadowWarning = getComputedStyle(
  //   document.documentElement
  // ).getPropertyValue("--box-shadow-warning");
  // const boxShadowRecommended = getComputedStyle(
  //   document.documentElement
  // ).getPropertyValue("--box-shadow-recommended");
  // const bgWarning = getComputedStyle(document.documentElement).getPropertyValue(
  //   "--bg-warning"
  // );
  // const bgRecommended = getComputedStyle(
  //   document.documentElement
  // ).getPropertyValue("--bg-recommended");
  // const warningStyle = {
  //   boxShadow: boxShadowWarning,
  //   backgroundColor: bgWarning,
  // };
  // const recommendedStyle = {
  //   boxShadow: boxShadowRecommended,
  //   backgroundColor: bgRecommended,
  // };

  const selectFav = () => {};
  const deselectEQ = (e) => {
    e.preventDefault();
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
      {pathname === "/" || pathname === "/tutorial" || pathname === "/bye" ? (
        ""
      ) : (
        <nav className={css.header}>
          <div className={css.leftNav}>
            {/* <HeaderNavBtn to="/reset" display={"♻️"} /> */}
            <HeaderNavBtn to="/eq" display={`${selectedItems.length}/5`} />
            <HeaderNavBtn to="/workshop" display={`🔨`} />
            {/* <HeaderNavBtn to="/alchemy" display={`⚗️`} /> */}
            {/* <HeaderNavBtn
            to="/-"
            display="✔️"
            crossed={true}
            onClick={deselectEQ}
          /> */}
          </div>
          <div className={css.rightNav}>
            {(selectedItems.length > 0) & (selectedItems.length < 6) ? (
              <HeaderNavBtn
                to="/dungeon"
                display={`Go${getDiceTypeIcon("playerAttack")}`}
                // display={`Go${getDiceTypeIcon("playerAttack")}`}
                onClick={enterDungeon}
                // inactive={true}
                recommended={true}
                styles={{ whiteSpace: "nowrap" }}
              />
            ) : (
              <HeaderNavBtn to="/eq" display={`PackEQ`} warning={true} />
            )}

            <HeaderNavBtn to="/quickBattle" display="Paths" />
            <HeaderNavBtn to="/town" display="Caravan" />
          </div>
        </nav>
      )}
    </header>
  );
};
