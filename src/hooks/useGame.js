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
} from "redux/game/selectors";

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

  return {
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
  };
};
