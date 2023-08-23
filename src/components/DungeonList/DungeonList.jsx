// import React, { useEffect, useState } from "react";
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
import { getDungeon, getBasicDungeons } from "data/dungeons";
// import { Loader } from "components/Loader/Loader";

import css from "./DungeonList.module.css";

export const DungeonList = ({ id, list = getBasicDungeons() }) => {
  // const extraFilters = useSelector(selectFilters);
  // const dispatch = useDispatch();
  // const equipment = useSelector(selectEq);
  // const items = useSelector(selectEq);

  // useEffect(() => {
  //   dispatch(refreshEq());
  // }, [dispatch]);

  const displayed = id ? [getDungeon(id)] : [...list];

  return (
    <div className={css.list}>
      {/* {useSelector(selectLoading) ? (
        <>
          <br />
          <Loader />
        </>
      ) : (
        ""
      )} */}

      {/* filterItems(filters || extraFilters, items) */}
      {displayed.length < 1
        ? ""
        : displayed.map((el, index) => {
            return (
              <DungeonSquare
                {...{
                  ...el,
                  bgTxtFront: el.eventIcon,
                  bgTxtBack: el.icon,
                  key: `dungeon|${index}|${el.id}|${el.eventId}`,
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
