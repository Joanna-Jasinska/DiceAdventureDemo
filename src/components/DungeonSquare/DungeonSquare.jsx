// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./DungeonSquare.module.css";
import { useDispatch } from "react-redux";
import { setSelectDungeon } from "redux/game/operations";
import { getDiceTypeIcon } from "data/icons";
import { DiceIcon } from "components/DiceIcon/DiceIcon";

export const DungeonSquare = ({
  name,
  eventName,
  id,
  selected = false,
  background,
  lv = -1,
  weakness = false,
  // eventId,
  // lvStarted,
  // lvReached,
  // gold,
  // ally,
}) => {
  const dispatch = useDispatch();
  const { bgColor, icon, eventIcon } = background;
  const weaknessTypes = weakness && weakness !== undefined ? weakness : false;

  const selectSelf = () => {
    if (!selected) {
      dispatch(setSelectDungeon(id));
    }
  };
  return (
    <div className={css.item} id={id}>
      <Miniature
        // url={icon}
        alt={name}
        bgTxtFront={eventIcon}
        bgTxtBack={icon}
        bgColor={bgColor}
        // lv={lvReached}
      />
      <div className={css.bar}>
        {selected === "hide" ? (
          ""
        ) : (
          <button
            key={`${name}btn${id}`}
            className={`${css.button} ${selected ? css.selected : ""} ${
              css.delete
            }`}
            type="button"
            onClick={selectSelf}
          >
            {selected ? getDiceTypeIcon("playerAttack") : "🠘"}
          </button>
        )}
        <span className={css.text}>
          <span className={css.level}>{`${lv} `}</span>
          <span className={css.name}>{`${name} ${eventName}`}</span>
        </span>
      </div>
      <div className={css.iconBag}>
        {weaknessTypes
          ? weaknessTypes.map((w, index) => (
              <DiceIcon type={w} key={`dungeonWeakness|${id}|${index}`} />
            ))
          : ""}
      </div>
    </div>
  );
};
