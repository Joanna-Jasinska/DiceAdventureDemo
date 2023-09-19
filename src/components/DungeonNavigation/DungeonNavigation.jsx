import { HeaderNavBtn } from "../HeaderNavBtn/HeaderNavBtn";
import { useDispatch } from "react-redux";
import { useDungeon } from "hooks";
import css from "./DungeonNavigation.module.css";
import { gainFromDungeonSummary } from "redux/game/operations";
import { clearDungeon } from "redux/dungeon/operations";
import { clearCombat } from "redux/combat/operations";
import { useLocation } from "react-router-dom";

export const DungeonNavigation = () => {
  const dispatch = useDispatch();
  const { player } = useDungeon();
  const { life, maxLife } = player;
  const location = useLocation();
  const { pathname } = location;
  const nothing = (e) => {
    e.preventDefault();
  };

  const exitDungeon = (e) => {
    e.preventDefault();
    dispatch(gainFromDungeonSummary()).then(() => {
      dispatch(clearDungeon());
      dispatch(clearCombat());
    });
  };

  return pathname === "/" || pathname === "/tutorial" || pathname === "/bye" ? (
   ''
  ) : (
    <header className={`header ${css.header}`}>
      <nav className={css.header}>
        <div className={css.leftNav}>
          <HeaderNavBtn
            to="/-"
            display={`${life}❤️${maxLife}`}
            styles={{ whiteSpace: "nowrap" }}
            onClick={nothing}
          />
        </div>
        <div className={css.rightNav}>
          <HeaderNavBtn to="/-" display="🏃Leave Path" onClick={exitDungeon} />
        </div>
      </nav>{" "}
    </header>
  );
};
