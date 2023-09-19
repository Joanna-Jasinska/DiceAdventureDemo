import { useSelector } from "react-redux";
import { selectLoading, selectEq, selectFilters } from "redux/eq/selectors";
import { WorkshopItem } from "./WorkshopItem/WorkshopItem";

import css from "./WorkshopList.module.css";
import { Loader } from "components/Loader/Loader";

function sort(a, b) {
  const aSelected = a.selected !== undefined ? a.selected : false;
  const bSelected = b.selected !== undefined ? b.selected : false;
  const aFavorite = a.favorite !== undefined ? a.favorite : false;
  const bFavorite = b.favorite !== undefined ? b.favorite : false;
  if (aSelected === bSelected) {
    if (aFavorite === bFavorite) {
      if (aSelected === true || aFavorite === true) return 0;
      return (a.lv - b.lv) * -1;
    }
    return a.favorite ? -1 : 1;
  }
  return a.selected ? -1 : 1;
}
export const WorkshopList = ({ filters }) => {
  const extraFilters = useSelector(selectFilters);
  const items = useSelector(selectEq);

  const filterItems = (filters, items) => {
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
          ? filterItems(filters || extraFilters, items)
              .map((el, index) => {
                return { ...el, index: index };
              })
              .sort(sort)
              .map((el) => {
                return (
                  <WorkshopItem
                    name={`${el.name}`}
                    alt={`${el.alt}`}
                    itemId={`${el.itemId}`}
                    key={`${el.name}|${el.index}|${el.id}`}
                    index={el.index}
                    selected={el.selected}
                    skill={el.skill}
                    statsTxT={el.statsTxT || ""}
                    dices={el.dices}
                    nondices={el.nondices}
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
