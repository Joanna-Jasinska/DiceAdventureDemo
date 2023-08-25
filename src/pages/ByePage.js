import { useSelector } from "react-redux";
import { selectError } from "redux/auth/selectors";
// import { Item } from "components/Item/Item";
import { ItemList } from "components/ItemList/ItemList";
import css from "./../components/Phonebook/Phonebook.module.css";
import { Title } from "components/Phonebook/Title/Title";

export const ByePage = () => {
  const error = useSelector(selectError);
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      <Title title="Thank you for playing Dice Adventure Demo 😸" />
    </main>
  );
};

export default ByePage;
