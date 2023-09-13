import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import css from "./Page.module.css";
import { LevelUps } from "components/LevelUps/LevelUps";
import { useGame } from "hooks/useGame";
// import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { WorkshopList } from "components/WorkshopList/WorkshopList";

export const WorkshopPage = () => {
  const error = useSelector(selectGameError);
  // const { spareLvUps } = useGame();
  return (
    <main className={`${css.main} ${css.center}`}>
      {error ? <span className={css.error}>{error}</span> : ""}

      {/* <PlayerAvatar /> */}
      {/* <BagOfGold gold={gold} /> */}
      {/* <LevelUps lv={spareLvUps} /> */}
      <WorkshopList />
    </main>
  );
};

export default WorkshopPage;
