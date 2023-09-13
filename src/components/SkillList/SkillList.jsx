import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectFilters } from "redux/eq/selectors";
import { SkillSquare } from "components/SkillSquare/SkillSquare";
import { updateItem } from "redux/eq/operations";
import { Loader } from "components/Loader/Loader";
import { selectPackedItems } from "redux/dungeon/selectors";
import { useCombat, useDungeon } from "hooks";
import { Skill } from "objects/Skill";
import css from "./SkillList.module.css";

export const SkillList = ({ filters }) => {
  const extraFilters = useSelector(selectFilters);
  const { dungeon } = useDungeon();

  const dispatch = useDispatch();
  const items = useSelector(selectPackedItems);

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
  const { combat } = useCombat();

  return (
    <div className={css.list}>
      {useSelector(selectLoading) ? (
        <>
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
                <SkillSquare
                  name={`${el.name}`}
                  alt={`${el.alt}`}
                  itemId={`${el.itemId}`}
                  key={`${el.name}|${el.index}|${el.id}`}
                  // key={`key|${index}`}
                  index={index}
                  selected={el.selected}
                  skill={el.skill}
                  currentUses={el.currentUses}
                  success={Skill.usedDices(el.itemId, { combat, dungeon })}
                  statsTxT={el.statsTxT || ""}
                  toggleSelect={() =>
                    dispatch(
                      updateItem({
                        ...el,
                        selected: !el.selected,
                      })
                    )
                  }
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
