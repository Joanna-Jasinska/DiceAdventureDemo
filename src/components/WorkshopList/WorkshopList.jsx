import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { game } from "api/game";
import { selectLoading, selectEq, selectFilters } from "redux/eq/selectors";
// import { selectItems, selectFilters } from "redux/game/selectors";
import { WorkshopItem } from "./WorkshopItem/WorkshopItem";
import {
  fetchEquipment,
  deselectAllItems,
  updateItem,
  // refreshEq,
} from "redux/eq/operations";
import { setFilter } from "redux/filter/filterSlice";

import css from "./WorkshopList.module.css";
import { Loader } from "components/Loader/Loader";

export const WorkshopList = ({ filters }) => {
  const extraFilters = useSelector(selectFilters);

  const dispatch = useDispatch();
  const items = useSelector(selectEq);

  // useEffect(() => {
  //   dispatch(refreshEq());
  // }, [dispatch]);

  const filterItems = (filters, items) => {
    // return items;
    const filteredItems = items
      ? Array.isArray(items)
        ? [
            ...items.filter((i) => {
              return !filters.selected || i.selected === filters.selected;
            }),
          ]
        : items
      : items;
    return filteredItems;
  };

  return (
    <div className={css.list}>
      {useSelector(selectLoading) ? (
        <>
          <br />
          <Loader />
        </>
      ) : (
        ""
      )}

      {/* <Item {...items.all[0]} /> */}
      {/* filters || extraFilters */}
      {items
        ? Array.isArray(items)
          ? filterItems(filters || extraFilters, items).map((el, index) => {
              return (
                <WorkshopItem
                  name={`${el.name}`}
                  alt={`${el.alt}`}
                  itemId={`${el.itemId}`}
                  key={`${el.name}|${el.index}|${el.id}`}
                  // key={`key|${index}`}
                  index={index}
                  selected={el.selected}
                  skill={el.skill}
                  statsTxT={el.statsTxT || ""}
                  // toggleSelect={() =>
                  //   dispatch(
                  //     updateItem({
                  //       ...el,
                  //       selected: !el.selected,
                  //     })
                  //   )
                  // }
                  // stats={el ? (el.stats ? el.stats : el) : []}
                  dices={el.dices}
                  lv={el.lv}
                />
              );
            })
          : ""
        : ""}
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
