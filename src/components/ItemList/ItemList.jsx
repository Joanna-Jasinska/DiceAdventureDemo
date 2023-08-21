import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectEq, selectFilter } from "redux/eq/selectors";
import { selectItems, selectFilters } from "redux/game/selectors";
import { Item } from "components/Item/Item";
import { fetchEquipment } from "redux/eq/operations";
import { resetItems, updateItem } from "redux/game/operations";
import { setFilter } from "redux/filter/filterSlice";

// import css from './../Phonebook.module.css';
import css from "./ItemList.module.css";

export const ItemList = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();
  const equipment = useSelector(selectEq);
  const items = useSelector(selectItems);

  useEffect(() => {
    // dispatch(fetchEquipment());
    dispatch(resetItems());
  }, [dispatch]);

  //   useEffect(() => {
  //     console.table(equipment);
  //   }, [equipment]);

  const filterItems = (filters, items) => {
    const filteredItems = items
      ? items.all
        ? Array.isArray(items.all)
          ? {
              ...items,
              all: [
                ...items.all.filter((i) => {
                  return (
                    // i.stats.selected === true
                    !filters.selected || i.stats.selected === filters.selected
                  );
                }),
              ],
            }
          : items
        : items
      : items;
    return filteredItems;
  };
  //   const filterContacts = (filter, contacts) => {
  //     return contacts.filter(
  //       (el) =>
  //         el.name.toLowerCase().includes(filter.toLowerCase()) ||
  //         el.number
  //           .toLowerCase()
  //           .trim()
  //           .replace(/ |-/g, "")
  //           .includes(filter.toLowerCase().trim().replace(/ |-/g, ""))
  //     );
  //   };
  //   const Entry = ({ name, number, id }) => {
  //     return (
  //       <li className={css.entry} id={id}>
  //         <span className={css.entryText}>
  //           <span className={css.name}>{name + " "}</span>
  //           <span className={css.number}>{` ${number}`}</span>
  //         </span>
  //         <button
  //           key={`${name}${number}btn${id}`}
  //           className={`${css.button} ${css.delete}`}
  //           type="button"
  //           onClick={(e) => deleteContactHandle(e, { name, number, id })}
  //         >
  //           Delete
  //         </button>
  //       </li>
  //     );
  //   };

  return (
    <div className={css.list}>
      {useSelector(selectLoading) ? (
        <>
          <br />
          Loading changes...
        </>
      ) : (
        ""
      )}

      {/* <Item {...items.all[0]} /> */}
      {items
        ? items.all
          ? Array.isArray(items.all)
            ? filterItems(filters, items).all.map((element, index) => {
                const el = element.stats;
                return (
                  <Item
                    name={el.name}
                    number={el.number}
                    alt={el.alt}
                    id={`${el.id}`}
                    key={`${el.name}|${index}|${el.id}`}
                    selected={el.selected}
                    toggleSelect={() =>
                      dispatch(
                        updateItem({
                          element,
                          stats: {
                            ...element.stats,
                            selected: !element.stats.selected,
                          },
                        })
                      )
                    }
                    // toggleSelect={element.toggleSelection}
                  />
                );
              })
            : ""
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
