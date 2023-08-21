import { useSelector } from "react-redux";
import { selectError } from "redux/auth/selectors";
import { Item } from "components/Item/Item";
import css from "./../components/Phonebook/Phonebook.module.css";
import { Navigate } from "react-router-dom";
export const TownPage = () => {
  const error = useSelector(selectError);
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      <Navigate to="/eq" />
    </main>
  );
};

export default TownPage;
