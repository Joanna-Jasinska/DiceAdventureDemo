import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderNavBtn } from "../HeaderNavBtn/HeaderNavBtn";
import { selectEq } from "redux/eq/selectors";
import { useDungeon } from "hooks";
import {
  packEquipment,
  getReadyToEnter,
  startSelectedDungeon,
} from "redux/dungeon/operations";
import css from "./TownNavigation.module.css";
import { useGame } from "hooks/useGame";
import { getDiceTypeIcon } from "data/icons";
import { useLocation } from "react-router-dom";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { PLvAvatar } from "components/PLvAvatar/PLvAvatar";
// import { LevelUps } from "components/LevelUps/LevelUps";

export const TownNavigation = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectEq);
  const { selectedDungeonId, currentDungeons } = useGame();
  const { readyToEnter } = useDungeon();
  const { gold } = useGame();
  const location = useLocation();
  const { pathname } = location;
  const { spareLvUps } = useGame();
  const selectedItems = [...items].filter((item) => {
    if (item.selected) return true;
    return false;
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

  // const selectFav = () => {};
  // const deselectEQ = (e) => {
  //   e.preventDefault();
  //   selectedItems.forEach((el) => {
  //     if (el.selected)
  //       dispatch(
  //         updateItem({
  //           ...el,
  //           selected: false,
  //         })
  //       );
  //   });
  // };

  const enterDungeon = (e) => {
    e.preventDefault();
    dispatch(getReadyToEnter());
  };

  useEffect(() => {
    if (readyToEnter) {
      dispatch(
        startSelectedDungeon()
        // Dungeon.getEventIdFromSelectedCurrentDungeon(
        //   selectedDungeonId,
        //   currentDungeons
        // )
      );
      dispatch(packEquipment());
    }
  }, [dispatch, readyToEnter, currentDungeons, selectedDungeonId]);

  return pathname === "/" || pathname === "/tutorial" || pathname === "/bye" ? (
    ""
  ) : (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          {/* <HeaderNavBtn to="/reset" display={"♻️"} /> */}
          <PLvAvatar shrink={true} gold={"lv"} />
          <BagOfGold shrink={true} gold={gold} />
          {/* <LevelUps shrink={true} lv={spareLvUps} /> */}
          <HeaderNavBtn to="/eq" display={`${selectedItems.length}/5`} />
          <HeaderNavBtn
            to="/workshop"
            display={spareLvUps > 0 ? `🔨${spareLvUps}` : `🔨`}
            recommended={spareLvUps > 0}
          />
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
    </header>
  );
};
