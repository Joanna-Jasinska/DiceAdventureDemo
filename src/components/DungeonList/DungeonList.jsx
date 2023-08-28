// import { useEffect } from "react";
// import {  useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectLoading, selectEq, selectFilters } from "redux/eq/selectors";
// import { selectItems, selectFilters } from "redux/game/selectors";
// import {
//   fetchEquipment,
//   deselectAllItems,
//   updateItem,
//   refreshEq,
// } from "redux/eq/operations";
// import { setFilter } from "redux/filter/filterSlice";
import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";
// import { DUNGEONS } from "data/dungeons";
import { getDungeon } from "data/dungeons";
import { useGame } from "hooks/useGame";
// import { Loader } from "components/Loader/Loader";

import css from "./DungeonList.module.css";

export const DungeonList = () => {
  const { currentDungeons, selectedDungeonId } = useGame();
  // const list = givenList ? givenList : currentDungeons;
  const list = currentDungeons;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(`selectedDungeonId: [${selectedDungeonId}]`);
  //   // console.log(`game.currentDungeons: [${game.currentDungeons}]`);
  //   // console.table(game);
  // }, []);

  return (
    <div className={css.list}>
      {!Array.isArray(list) || list.length < 1
        ? ""
        : list.map((id, index) => {
            const dungeon = getDungeon(id);
            const isSelected = dungeon.id === selectedDungeonId ? true : false;
            return (
              <DungeonSquare
                {...{
                  ...dungeon,
                  selected: isSelected,
                  key: `dungeon|${index}|${dungeon.id}|${dungeon.eventId}`,
                }}
              />
            );
          })}
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContactHandle: PropTypes.func.isRequired,
// };
