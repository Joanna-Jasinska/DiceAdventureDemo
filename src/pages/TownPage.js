import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import css from "./Page.module.css";
import { AllyList } from "components/AllyList/AllyList";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { useGame } from "hooks/useGame";
import { LevelUps } from "components/LevelUps/LevelUps";
import { PlayerLvAvatar } from "components/PlayerLvAvatar/PlayerLvAvatar";
// import { TravelCount } from "components/TravelCount/TravelCount";
export const TownPage = () => {
  const error = useSelector(selectGameError);
  const { gold, spareLvUps } = useGame();
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}

      <AllyList />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          justifyContent: "center",
        }}
      >
        {/* <TravelCount /> */}
        <PlayerLvAvatar />
        <BagOfGold gold={gold} />
        <LevelUps lv={spareLvUps} />
      </div>
    </main>
  );
};

export default TownPage;
