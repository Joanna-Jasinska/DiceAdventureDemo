import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors"; 
// import { Item } from "components/Item/Item";
import { ItemList } from "components/ItemList/ItemList";
import css from "./../components/Phonebook/Phonebook.module.css";

export const EQPage = () => {
  const error = useSelector(selectGameError);
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      {/* <Item name="Legacy Sword" alt="🗡️" />
      <Item name="Utiki Spear" alt="🔱" /> */}
      <ItemList />
    </main>
  );
};

export default EQPage;
