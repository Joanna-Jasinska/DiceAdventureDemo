import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Loader } from "components/Loader/Loader";
// import { useRef } from "react";
// import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
import { getEnemyGold } from "redux/dungeon/operations";
import { clearCombat, willEndCombat } from "redux/combat/operations";
import { Loader } from "components/Loader/Loader";
import { Navigate } from "react-router-dom";
import { useCombat } from "hooks";
import { selectEnemyLife } from "redux/enemy/selectors";
import { selectPlayerLife } from "redux/dungeon/selectors";

// import { selectLoading } from "redux/eq/selectors";
export const ReturnFromCombatPage = () => {
  const dispatch = useDispatch();
  const { endCombat, inCombat } = useCombat();
  const enemyLife = useSelector(selectEnemyLife);
  const playerLife = useSelector(selectPlayerLife);
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoading);
  // let redirect = true;

  useEffect(() => {
    console.log(` ReturnFromCombatPage rendering START`);
    return () => console.log(` ReturnFromCombatPage rendering END`);
  }, []);

  useEffect(() => {
    // if (endCombat === "finished") {
    //   return;
    // }
    // if (endCombat === "processing") {
    if (inCombat && (enemyLife < 1 || playerLife < 1)) {
      // dispatch(willEndCombat("finished")).finally(() => {
      // console.log(`would dispatch get gold, will endCombat[$x{endCombat}]`);
      dispatch(getEnemyGold()).then(() => {
        dispatch(clearCombat());
      });
      // });
      return;
    }
    // if (!endCombat && inCombat) {
    //   dispatch(willEndCombat("processing")).finally(() => {
    //     // nothing
    //   });
    //   return;
    // }
  }, [dispatch, inCombat]);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      <Navigate to="/town" />
      <Title title="Picking up gold" />
      {/* {updated ? <Navigate to="/dungeon" /> : <Loader />} */}
    </main>
  );
};

export default ReturnFromCombatPage;
