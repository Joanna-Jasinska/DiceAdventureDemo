import { HeaderNavBtn } from "../HeaderNavBtn/HeaderNavBtn";
import { useSelector, useDispatch } from "react-redux";
// import { selectItems } from "redux/game/selectors";
// import { updateItem } from "redux/game/operations";
import {
  resetEquipment,
  deselectAllItems,
  updateItem,
  deselectItem,
} from "redux/eq/operations";
import { selectEq } from "redux/eq/selectors";
import { useDungeon } from "hooks";
// import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import css from "./DungeonNavigation.module.css";
import { gainFromDungeonSummary } from "redux/game/operations";
import { clearDungeon } from "redux/dungeon/operations";
import { clearCombat } from "redux/combat/operations";

export const DungeonNavigation = () => {
  const dispatch = useDispatch();
  const { player } = useDungeon();
  const { life, maxLife } = player;
  const items = useSelector(selectEq);
  const selectedItems = [...items].filter((item) => {
    if (item.selected) return item.selected;
  });
  const selectFav = () => {};
  const resetGame = () => {
    dispatch(resetEquipment());
  };
  const nothing = (e) => {
    e.preventDefault();
  };
  const deselectEQ = () => {
    // console.log(`Unequipping all.`);
    // dispatch(deselectAllItems());

    selectedItems.forEach((el) => {
      if (el.selected)
        dispatch(
          updateItem({
            ...el,
            selected: false,
          })
        );

      //     // dispatch(
      //     //   updateItem({ ...el, stats: { ...el.stats, selected: false } })
      //     // );
      //     // console.log(`should deselect`);
    });
  };

  const exitDungeon = (e) => {
    e.preventDefault();
    dispatch(gainFromDungeonSummary()).then(() => {
      dispatch(clearDungeon());
      dispatch(clearCombat());
    });
  };

  return (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          <HeaderNavBtn to="/reset" display={"♻️"} />
          {/* <PlayerAvatar /> */}
          <HeaderNavBtn
            to="/-"
            display={`${life}❤️${maxLife}`}
            onClick={nothing}
          />
        </div>
        <div className={css.rightNav}>
          <HeaderNavBtn
            to="/-"
            display="🏃 Leave dung. 💩"
            onClick={exitDungeon}
          />
        </div>
      </nav>
    </header>
  );
};
