import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";
import { getDungeon } from "data/dungeons";
import { useGame } from "hooks/useGame";
// import { Loader } from "components/Loader/Loader";

import css from "./DungeonList.module.css";

export const DungeonList = () => {
  const { currentDungeons, selectedDungeonId, dungeonLevels } = useGame();
  const list = currentDungeons;

  return (
    <div className={css.list}>
      {!Array.isArray(list) || list.length < 1
        ? ""
        : list.map((id, index) => {
            const dungeon = getDungeon(id);
            const isSelected = dungeon.id === selectedDungeonId ? true : false;
            return (
              <DungeonSquare
                {...{
                  ...dungeon,
                  selected: isSelected,
                  lv: dungeonLevels[dungeon.id],
                  key: `dungeon|${index}|${dungeon.id}|${dungeon.eventId}`,
                }}
              />
            );
          })}
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContactHandle: PropTypes.func.isRequired,
// };
