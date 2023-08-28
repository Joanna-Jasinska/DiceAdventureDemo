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
import css from "./TownNavigation.module.css";

export const TownNavigation = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectEq);
  const selectedItems = [...items].filter((item) => {
    if (item.selected) return item.selected;
  });
  const selectFav = () => {};
  const resetGame = () => {
    dispatch(resetEquipment());
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
  return (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          {/* <HeaderNavBtn to="/eq" display={`EQ 3/5`} inactive={true} /> */}
          <HeaderNavBtn to="/reset" display={"♻️"} />
          <HeaderNavBtn to="/eq" display={`EQ ${selectedItems.length}/5`} />
          {/* <HeaderNavBtn to="/eq" display="Unequip" /> */}
          <HeaderNavBtn
            to="/eq"
            display="✔️"
            crossed={true}
            onClick={deselectEQ}
          />
          {/* <HeaderNavBtn to="/eq" display="❤️" onClick={selectFav} /> */}
        </div>
        <div className={css.rightNav}>
          <HeaderNavBtn to="/town" display="Caravan" />
          <HeaderNavBtn to="/return" display="Battle" />
          {/* <HeaderNavBtn to="/eq" display="EQ" /> */}
        </div>
      </nav>
    </header>
  );
};
