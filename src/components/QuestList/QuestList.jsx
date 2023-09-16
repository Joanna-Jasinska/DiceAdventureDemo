import { useSelector } from "react-redux";
import { selectLoading } from "redux/eq/selectors";
import { useGame } from "hooks/useGame";
import { QuestSquare } from "./QuestSquare/QuestSquare";
import { Loader } from "components/Loader/Loader";
import css from "./QuestList.module.css";
import { Quest } from "objects/Quest";

export const QuestList = () => {
  // const extraFilters = useSelector(selectFilters);
  // const items = useSelector(selectEq);
  const { dungeonLevels, allies } = useGame();
  const wizardQuests = Quest.getAvailableQuests(allies, 1, dungeonLevels);
  const quests = [...(wizardQuests ? wizardQuests : [])];
  // const wizardQuests=getWizardQuests(allyLv = 1, caravanLv = 1, dungeonLevels)

  // const filterItems = (filters, items) => {
  //   const filteredItems = items
  //     ? Array.isArray(items)
  //       ? [
  //           ...items.filter((i) => {
  //             return !filters.selected || i.selected === filters.selected;
  //           }),
  //         ]
  //       : items
  //     : items;
  //   return filteredItems;
  // };

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
      {quests
        ? Array.isArray(quests)
          ? // ? filterItems(filters || extraFilters, items).map((el, index) => {
            quests.map((el, index) => {
              return (
                <QuestSquare
                  {...el}
                  // name={`${el.name}`}
                  // alt={`${el.alt}`}
                  // itemId={`${el.itemId}`}
                  key={`Quest|${el.item.name}|${index}`}
                  // index={index}
                  // selected={el.selected}
                  // skill={el.skill}
                  // statsTxT={el.statsTxT || ""}
                  // dices={el.dices}
                  // nondices={el.nondices}
                  // lv={el.lv}
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
