import { useSelector } from "react-redux";
import {
  selectReadyToEnter,
  selectPackedItems,
  selectAvailableEnemies,
  selectAvailableBosses,
  selectAlly,
  selectError,
  selectLoading,
  selectInDungeon,
  selectDungeon,
  selectDungeonBg,
  selectPlayer,
  selectLv,
  selectStartedLv,
  selectGoldEarned,
} from "redux/dungeon/selectors";

export const useDungeon = () => {
  const error = useSelector(selectError);
  const readyToEnter = useSelector(selectReadyToEnter);
  const packedItems = useSelector(selectPackedItems);
  const enemies = useSelector(selectAvailableEnemies);
  const bosses = useSelector(selectAvailableBosses);
  const ally = useSelector(selectAlly);
  const loading = useSelector(selectLoading);
  const inDungeon = useSelector(selectInDungeon);
  const dungeon = useSelector(selectDungeon);
  const name = dungeon.name;
  const eventName = dungeon.eventName;
  const bg = useSelector(selectDungeonBg);
  const player = useSelector(selectPlayer);
  const lv = useSelector(selectLv);
  const startedLv = useSelector(selectStartedLv);
  const goldEarned = useSelector(selectGoldEarned);

  return {
    error,
    readyToEnter,
    packedItems,
    enemies,
    bosses,
    ally,
    loading,
    inDungeon,
    dungeon,
    name,
    eventName,
    bg,
    player,
    lv,
    startedLv,
    goldEarned,
  };
};
