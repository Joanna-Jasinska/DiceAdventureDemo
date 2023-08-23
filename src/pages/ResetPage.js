import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Loader } from "components/Loader/Loader";
// import { useRef } from "react";
// import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
import { resetEquipment } from "redux/eq/operations";
import { clearDungeon } from "redux/dungeon/operations";
import { Navigate } from "react-router-dom";
// import { selectLoading } from "redux/eq/selectors";
export const ResetPage = () => {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoading);
  // let redirect = true;

  useEffect(() => {
    console.log("Reseting game.");
    dispatch(resetEquipment());
    dispatch(clearDungeon());
    console.log("dispatched reseting dungeon");
  }, [dispatch]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      <Navigate to="/town" />
      {/* {!loading ? <Navigate to="/eq" /> : <Loader txt={"Reseting data."} />} */}
      <Title title="Resetting game." />
    </main>
  );
};

export default ResetPage;
