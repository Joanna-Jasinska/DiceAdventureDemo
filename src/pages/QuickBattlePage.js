import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import { ItemList } from "components/ItemList/ItemList";
// import { WorkshopList } from "components/WorkshopList/WorkshopList";
import { DungeonList } from "components/DungeonList/DungeonList";
import css from "./Page.module.css";
export const QuickBattlePage = () => {
  const error = useSelector(selectGameError);

  return (
    <main className={`${css.main}`}>
      {error ? <span className={css.error}>{error}</span> : ""}
      <DungeonList />
      <ItemList filters={{ selected: true }} />
      {/* <WorkshopList filters={{ selected: true }} /> */}
    </main>
  );
};

export default QuickBattlePage;
