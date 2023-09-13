import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import { ItemList } from "components/ItemList/ItemList";
import { DungeonList } from "components/DungeonList/DungeonList";
import css from "./Page.module.css";
export const QuickBattlePage = () => {
  const error = useSelector(selectGameError);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      <DungeonList />
      <ItemList filters={{ selected: true }} />
    </main>
  );
};

export default QuickBattlePage;
