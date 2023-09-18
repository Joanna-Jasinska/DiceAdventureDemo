import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";
import { getDungeon } from "data/dungeons";
import { useGame } from "hooks/useGame";
// import { Loader } from "components/Loader/Loader";

import css from "./DungeonList.module.css";
import { TravelCount } from "components/TravelCount/TravelCount";
import { Dungeon } from "objects/Dungeon";

export const DungeonList = () => {
  const { selectedDungeonId, dungeonLevels, playerLv } = useGame();
  const list = Dungeon.getCurrentDungeons(playerLv);
  // const list = currentDungeons;

  return (
    <div className={css.list}>
      {!Array.isArray(list) || list.length < 1
        ? ""
        : list.map((id, index) => {
            const dungeon = getDungeon(id);
            const isSelected = index === selectedDungeonId ? true : false;
            return (
              <DungeonSquare
                {...{
                  ...dungeon,
                  selected: isSelected,
                  lv: dungeonLevels[dungeon.id],
                  index: index,
                  key: `dungeon|${index}|${dungeon.id}|${dungeon.eventId}`,
                }}
              />
            );
          })}
      <TravelCount count={`${playerLv - 1}`} />
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
