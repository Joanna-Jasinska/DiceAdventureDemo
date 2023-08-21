import { useSelector } from "react-redux";
import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
// import { Item } from "components/Item/Item";
import { ItemList } from "components/ItemList/ItemList";
import css from "./../components/Phonebook/Phonebook.module.css";

export const QuickBattlePage = () => {
  const error = useSelector(selectError);
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      {/* <Item name="Legacy Sword" alt="🗡️" />
      <Item name="Utiki Spear" alt="🔱" /> */}
      <Title title={"Quick Battle"} />
      {/* <ItemList /> */}
    </main>
  );
};

export default QuickBattlePage;
