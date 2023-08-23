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
import { AllySquare } from "components/AllySquare/AllySquare";
import { ALLIES } from "data/allies";
import { getAlly } from "data/allies";
import { Loader } from "components/Loader/Loader";

import css from "./AllyList.module.css";

export const AllyList = ({ id, list = ALLIES }) => {
  // const extraFilters = useSelector(selectFilters);
  // const dispatch = useDispatch();
  // const equipment = useSelector(selectEq);
  // const items = useSelector(selectEq);

  // useEffect(() => {
  //   dispatch(refreshEq());
  // }, [dispatch]);

  const displayed = id ? [getAlly(id)] : [...list];

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
              <AllySquare
                {...{
                  ...el,
                  bgTxtFront: el.icon,
                  bgTxtBack: el.eventIcon,
                  key: `ally|${index}|${el.id}`,
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
