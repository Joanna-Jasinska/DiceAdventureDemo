import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import { ItemList } from "components/ItemList/ItemList";
import css from "./Page.module.css";

export const EQPage = () => {
  const error = useSelector(selectGameError);
  return (
    <main className={`${css.main}`}>
      {error ? <span className={css.error}>{error}</span> : ""}
      <ItemList />
    </main>
  );
};

export default EQPage;
