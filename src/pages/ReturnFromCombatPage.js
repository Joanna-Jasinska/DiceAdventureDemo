import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Loader } from "components/Loader/Loader";
// import { useRef } from "react";
// import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
import { getEnemyGold } from "redux/dungeon/operations";
import { clearCombat } from "redux/combat/operations";
import { Loader } from "components/Loader/Loader";
import { Navigate } from "react-router-dom";
// import { selectLoading } from "redux/eq/selectors";
export const ReturnFromCombatPage = () => {
  const dispatch = useDispatch();
  const [updated, update] = useState(false);
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoading);
  // let redirect = true;

  useEffect(() => {
    if (!updated) {
      // if (!updated) {
      //   dispatch(getEnemyGold());
      //   update(true);
      // }
      dispatch(getEnemyGold()).then(() => dispatch(clearCombat()));
      // dispatch(clearCombat());
      update(true);
    }
  }, [dispatch]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      {/* <Navigate to="/town" /> */}
      <Title title="Picking up gold" />
      {updated ? <Navigate to="/dungeon" /> : <Loader />}
    </main>
  );
};

export default ReturnFromCombatPage;
