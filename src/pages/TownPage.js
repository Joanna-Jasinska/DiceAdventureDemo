import { useSelector } from "react-redux";
import { selectGameError } from "redux/game/selectors";
import { Item } from "components/Item/Item";
import { Title } from "components/Phonebook/Title/Title";
import css from "./../components/Phonebook/Phonebook.module.css";
import { Navigate } from "react-router-dom";
import { AllyList } from "components/AllyList/AllyList";
import { BagOfGold } from "components/BagOfGold/BagOfGold";
import { useDungeon } from "hooks";
import { useGame } from "hooks/useGame";
import { LevelUps } from "components/LevelUps/LevelUps";
export const TownPage = () => {
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
      <AllyList />
    </main>
  );
};

export default TownPage;
