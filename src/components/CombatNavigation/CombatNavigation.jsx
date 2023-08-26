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
// import deselectAllDices
import { selectEq } from "redux/eq/selectors";
import css from "./CombatNavigation.module.css";

export const CombatNavigation = () => {
  const dispatch = useDispatch();
  // const items = useSelector(selectEq);
  // const selectedItems = [...items].filter((item) => {
  //   if (item.selected) return item.selected;
  // });
  const deselectAllDices = (e) => {
    e.preventDefault();
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
          <HeaderNavBtn to="/combat" display={`11❤️45`} onClick={nothing} />
          {/* <HeaderNavBtn to="/combat" display={""} /> */}
          <HeaderNavBtn
            to="/eq"
            display="🎲"
            crossed={true}
            onClick={deselectAllDices}
          />
          {/* <HeaderNavBtn to="/eq" display="❤️" onClick={selectFav} /> */}
        </div>
        <div className={css.rightNav}>
          <HeaderNavBtn to="/return" display="🏃 Town" />
          <HeaderNavBtn to="/combat" display={`${endTurnIcon} End Turn`} />
        </div>
      </nav>
    </header>
  );
};
