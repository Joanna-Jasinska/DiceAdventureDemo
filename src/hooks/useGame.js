import { useSelector } from "react-redux";
import {
  selectCurrentDungeons,
  selectDungeonLevels,
  selectGameError,
  selectGame,
  selectGold,
  selectLoading,
  selectMaxEqLv,
  selectPlayerLv,
  selectPossibleDungeons,
  selectSpareLvUps,
  selectSelectedDungeonId,
  selectAllies,
  selectJourney,
} from "redux/game/selectors";

// import { selectLoading as sEqLoading } from "redux/eq/selectors";
// import { selectLoading as sCombatLoading } from "redux/combat/selectors";
// import { selectLoading as sDungeonLoading } from "redux/dungeon/selectors";
// import { selectLoading as sEnemyLoading } from "redux/enemy/selectors";

export const useGame = () => {
  const error = useSelector(selectGameError);
  const loading = useSelector(selectLoading);
  const game = useSelector(selectGame);
  const currentDungeons = useSelector(selectCurrentDungeons);
  const possibleDungeons = useSelector(selectPossibleDungeons);
  const dungeonLevels = useSelector(selectDungeonLevels);
  const playerLv = useSelector(selectPlayerLv);
  const maxEqLv = useSelector(selectMaxEqLv);
  const spareLvUps = useSelector(selectSpareLvUps);
  const gold = useSelector(selectGold);
  const selectedDungeonId = useSelector(selectSelectedDungeonId);
  const allies = useSelector(selectAllies);
  const journey = useSelector(selectJourney);

  // const eqLoading = useSelector(sEqLoading);
  // const combatLoading = useSelector(sCombatLoading);
  // const dungeonLoading = useSelector(sDungeonLoading);
  // const enemyLoading = useSelector(sEnemyLoading);

  // const gameIsLoading =
  //   loading || eqLoading || combatLoading || dungeonLoading || enemyLoading;

  return {
    // gameIsLoading,
    error,
    loading,
    game,
    selectedDungeonId,
    currentDungeons,
    possibleDungeons,
    dungeonLevels,
    playerLv,
    maxEqLv,
    spareLvUps,
    gold,
    allies,
    journey,
  };
};
