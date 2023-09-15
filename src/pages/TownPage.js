import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import { AllyList } from "components/AllyList/AllyList";
import { QuestList } from "components/QuestList/QuestList";
// import { useGame } from "hooks/useGame";
// import { BagOfGold } from "components/BagOfGold/BagOfGold";
// import { LevelUps } from "components/LevelUps/LevelUps";
// import { PlayerLvAvatar } from "components/PlayerLvAvatar/PlayerLvAvatar";
// import { TravelCount } from "components/TravelCount/TravelCount";
import css from "./Page.module.css";

export const TownPage = () => {
  const error = useSelector(selectGameError);
  // const { gold, spareLvUps, dungeonLevels } = useGame();
  return (
    <main className={css.main}>
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
        <QuestList />
        {/* <TravelCount /> */}
        {/* <PlayerLvAvatar />
        <BagOfGold gold={gold} />
        <LevelUps lv={spareLvUps} /> */}
      </div>
    </main>
  );
};

export default TownPage;
