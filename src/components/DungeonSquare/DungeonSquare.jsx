// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./DungeonSquare.module.css";
import { useGame } from "hooks/useGame";
import { useDispatch } from "react-redux";
import { setSelectDungeon } from "redux/game/operations";

export const DungeonSquare = ({
  name,
  eventName,
  id,
  selected = false,
  background,
  lv = -1,
  // eventId,
  // lvStarted,
  // lvReached,
  // gold,
  // ally,
}) => {
  const dispatch = useDispatch();
  const { bgColor, icon, eventIcon } = background;
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
            {selected ? "⚔️" : "🠘"}
          </button>
        )}
        <span className={css.text}>
          <span className={css.level}>{`${lv} `}</span>
          <span className={css.name}>{`${name} ${eventName}`}</span>
        </span>
      </div>
    </div>
  );
};
