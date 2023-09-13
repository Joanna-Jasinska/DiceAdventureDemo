import { useSelector } from "react-redux";
import { persistor } from "redux/store";
import { selectGameError } from "redux/game/selectors";
import { Title } from "components/Title/Title";
import { useGame } from "hooks/useGame";
import { useEffect } from "react";
import css from "./Page.module.css";

export const ByePage = () => {
  const error = useSelector(selectGameError);
  const { playerLv } = useGame();

  useEffect(() => {
    const deleteAllState = async () => {
      persistor.purge();
    };
    if (playerLv !== undefined) {
      deleteAllState();
    }
  }, [playerLv]);

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
