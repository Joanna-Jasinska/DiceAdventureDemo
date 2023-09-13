import { Title } from "components/Title/Title";
import { Background } from "components/Background/Background";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { useDungeon } from "hooks";
import { useGame } from "hooks/useGame";

export const WelcomePage = () => {
  // const error = useSelector(selectGameError);
  const { inDungeon } = useDungeon();
  const { playerLv } = useGame();
  return (
    <main
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "0.4em 0px",
        minHeight: "76vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      <Background />
      Welcome to
      <Title title="Dice Adventure Demo" />
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
