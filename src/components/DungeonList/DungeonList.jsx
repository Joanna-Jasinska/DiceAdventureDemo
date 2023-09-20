import { DungeonSquare } from "components/DungeonSquare/DungeonSquare";
import { getDungeon } from "data/dungeons";
import { useGame } from "hooks/useGame";
// import { Loader } from "components/Loader/Loader";

import css from "./DungeonList.module.css";
import { TravelCount } from "components/TravelCount/TravelCount";
import { Dungeon } from "objects/Dungeon";
import { JOURNEY } from "data/journey";

export const DungeonList = () => {
  const { selectedDungeonId, dungeonLevels, journey } = useGame();
  const list = Dungeon.getCurrentDungeons(journey);
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
      <TravelCount count={`${journey} /${JOURNEY.length-5}`} />
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
