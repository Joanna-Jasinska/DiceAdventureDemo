import { HeaderNavBtn } from "../HeaderNavBtn/HeaderNavBtn";
import { useSelector, useDispatch } from "react-redux";
import { selectItems } from "redux/game/selectors";
import { updateItem, deselectAllItems } from "redux/game/operations";
import css from "./TownNavigation.module.css";

export const TownNavigation = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const deselectEQ = () => {
    console.log(`Unequipping all.`);
    dispatch(deselectAllItems());
    // items.all.array.forEach((el) => {
    //   if (el.stats.selected)
    //     dispatch(
    //       updateItem({ ...el, stats: { ...el.stats, selected: false } })
    //     );
    //   // console.log(`should deselect`);
    // });
  };
  return (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          <HeaderNavBtn to="/login" display={`EQ 3/5`} inactive={true} />
          <HeaderNavBtn to="/eq" display="Unequip" onClick={deselectEQ} />
        </div>
        <div className={css.rightNav}>
          <HeaderNavBtn to="/login" display="Log in" />
          <HeaderNavBtn to="/register" display="Register" />
        </div>
      </nav>
    </header>
  );
};
