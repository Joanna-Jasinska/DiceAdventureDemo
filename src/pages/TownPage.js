import { useSelector } from "react-redux";
import { selectError } from "redux/auth/selectors";
import { Item } from "components/Item/Item";
import { Title } from "components/Phonebook/Title/Title";
import css from "./../components/Phonebook/Phonebook.module.css";
import { Navigate } from "react-router-dom";
export const TownPage = () => {
  const error = useSelector(selectError);
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      {/* <Navigate to="/eq" /> */}
      <Title title="Town" />
    </main>
  );
};

export default TownPage;
