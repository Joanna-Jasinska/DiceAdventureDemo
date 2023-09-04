import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import css from "./../components/Phonebook/Phonebook.module.css";
import { LevelUps } from "components/LevelUps/LevelUps";
import { useGame } from "hooks/useGame";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { WorkshopList } from "components/WorkshopList/WorkshopList";

export const WorkshopPage = () => {
  const error = useSelector(selectGameError);
  const { gold, spareLvUps } = useGame();
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        {/* <PlayerAvatar /> */}
        <BagOfGold gold={gold} />
        <LevelUps lv={spareLvUps} />
      </div>
      <WorkshopList />
    </main>
  );
};

export default WorkshopPage;
