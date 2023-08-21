import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
import { resetEquipment } from "redux/eq/operations";
import { Navigate } from "react-router-dom";
import css from "./../components/Phonebook/Phonebook.module.css";
import { Loader } from "components/Loader/Loader";
export const ResetPage = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetEquipment());
  }, [dispatch]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      <Loader txt={"Reseting data."} />
      <Navigate to="/eq" />
      <Title title="Resetting game." />
    </main>
  );
};

export default ResetPage;
