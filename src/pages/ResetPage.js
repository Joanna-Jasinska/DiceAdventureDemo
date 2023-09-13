import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Title } from "components/Title/Title";
import { resetEquipment } from "redux/eq/operations";
import { clearDungeon } from "redux/dungeon/operations";
import { Navigate } from "react-router-dom";
import { clearCombat } from "redux/combat/operations";
import { resetGame } from "redux/game/operations";
import { useGame } from "hooks/useGame";
import css from "./Page.module.css";
export const ResetPage = () => {
  const dispatch = useDispatch();
  const { error } = useGame();

  useEffect(() => {
    console.log("Reseting game.");
    dispatch(resetEquipment());
    dispatch(clearDungeon());
    dispatch(clearCombat());
    dispatch(resetGame());
  }, [dispatch]);

  return (
    <main className={`${css.main}`}>
      {error ? <span className={css.error}>{error}</span> : ""}
      <Navigate to="/town" />
      <Title title="Resetting game." />
    </main>
  );
};

export default ResetPage;
