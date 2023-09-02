import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { game } from "api/game";
import { selectLoading, selectEq, selectFilters } from "redux/eq/selectors";
// import { selectItems, selectFilters } from "redux/game/selectors";
import { Skill } from "components/Skill/Skill";
import {
  fetchEquipment,
  deselectAllItems,
  updateItem,
  // refreshEq,
} from "redux/eq/operations";
// import { resetItems,  } from "redux/game/operations";
import { setFilter } from "redux/filter/filterSlice";

// import css from './../Phonebook.module.css';
import css from "./SkillList.module.css";
import { Loader } from "components/Loader/Loader";
import { selectPackedItems } from "redux/dungeon/selectors";

export const SkillList = ({ filters }) => {
  const extraFilters = useSelector(selectFilters);

  const dispatch = useDispatch();
  // const equipment = useSelector(selectEq);
  // const items = useSelector(selectItems);
  const items = useSelector(selectPackedItems);
  // const items = game.selectItems;

  // useEffect(() => {
  //   dispatch(refreshEq());
  // }, [dispatch]);

  //   useEffect(() => {
  //     console.table(equipment);
  //   }, [equipment]);

  const filterItems = (filters, items) => {
    // return items;
    const filteredItems = items
      ? Array.isArray(items)
        ? [
            ...items.filter((i) => {
              // i.selected === true
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
          {/* Loading changes... */}
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
                <Skill
                  name={`${el.name}`}
                  alt={`${el.alt}`}
                  id={`${el.id}`}
                  key={`${el.name}|${el.index}|${el.id}`}
                  // key={`key|${index}`}
                  index={index}
                  selected={el.selected}
                  toggleSelect={() =>
                    dispatch(
                      updateItem({
                        ...el,
                        selected: !el.selected,
                      })
                    )
                  }
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
