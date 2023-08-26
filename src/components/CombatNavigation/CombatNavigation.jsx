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
import { deselectAllDices } from "redux/combat/operations";
import { selectEq } from "redux/eq/selectors";
import css from "./CombatNavigation.module.css";

export const CombatNavigation = () => {
  const dispatch = useDispatch();
  // const items = useSelector(selectEq);
  // const selectedItems = [...items].filter((item) => {
  //   if (item.selected) return item.selected;
  // });
  const deselectAll = (e) => {
    e.preventDefault();
    dispatch(deselectAllDices());
  };
  const nothing = (e) => {
    e.preventDefault();
  };
  const endTurnIcon = "✔️";
  //   ✔️❌☠️
  // ⚙️💀☠️🩸❤️👍

  return (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          <HeaderNavBtn to="/reset" display={"♻️"} />
          <HeaderNavBtn to="/-" display={`11❤️45`} onClick={nothing} />
          <HeaderNavBtn
            to="/eq"
            display="🎲"
            crossed={true}
            onClick={deselectAll}
          />
          {/* <HeaderNavBtn to="/eq" display="❤️" onClick={selectFav} /> */}
        </div>
        <div className={css.rightNav}>
          <HeaderNavBtn to="/return" display="🏃 Town" />
          <HeaderNavBtn
            to="/-"
            display={`${endTurnIcon} End Turn`}
            onClick={nothing}
          />
        </div>
      </nav>
    </header>
  );
};
