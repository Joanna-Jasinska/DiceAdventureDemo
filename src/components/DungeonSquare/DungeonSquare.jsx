// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./DungeonSquare.module.css";

export const DungeonSquare = ({
  name,
  eventName,
  id,
  eventId,
  lvStarted,
  lvReached,
  gold,
  ally,
  selected = false,
  toggleSelect,
  bgColor,
  bgTxtFront,
  bgTxtBack,
}) => {
  return (
    <div className={css.item} id={id}>
      <Miniature
        // url={icon}
        alt={name}
        bgTxtFront={bgTxtFront}
        bgTxtBack={bgTxtBack}
        bgColor={bgColor}
        lv={lvReached}
      />
      <div className={css.bar}>
        <button
          key={`${name}btn${id}`}
          className={`${css.button} ${selected ? css.selected : ""} ${
            css.delete
          }`}
          type="button"
          onClick={toggleSelect}
        >
          {selected ? "⚔️" : "🠘"}
        </button>
        <span className={css.text}>
          {/* <span className={css.level}>{`${lvReached} `}</span> */}
          <span className={css.name}>{`${name} ${eventName}`}</span>
        </span>
      </div>
    </div>
  );
};
