import { Title } from "components/Title/Title";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { useDungeon } from "hooks";
import { useGame } from "hooks/useGame";
import css from "./Page.module.css";

export const WelcomePage = () => {
  // const error = useSelector(selectGameError);
  const { inDungeon } = useDungeon();
  const { playerLv } = useGame();
  return (
    <main className={`${css.main} ${css.center}`}>
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      Welcome to
      <Title title="Dice Adventure Demo" />
      Let's go to the end 😆!
      <br />
      <br />
      {inDungeon ? (
        <HeaderNavBtn
          to="/combat"
          display={"Continue Path"}
          recommended={true}
        />
      ) : playerLv > 1 ? (
        <HeaderNavBtn to="/town" display={"Continue Game"} recommended={true} />
      ) : (
        ""
      )}
      <HeaderNavBtn
        to="/reset"
        display={"Start New Game 😸"}
        recommended={true}
      />
      <HeaderNavBtn to="/tutorial" display={"Tutorial & Storyline"} />
    </main>
  );
};

export default WelcomePage;
