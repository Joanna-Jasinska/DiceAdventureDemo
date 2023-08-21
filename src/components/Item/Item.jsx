// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./Item.module.css";

export const Item = ({
  name,
  id,
  desc,
  icon,
  alt,
  tags,
  lvl = 1,
  selected = false,
  toggleSelect,
}) => {
  return (
    <div className={css.item} id={id}>
      <Miniature url={icon} alt={alt || name} />
      <div className={css.bar}>
        <button
          key={`${name}btn${id}`}
          className={`${css.button} ${selected ? css.selected : ""} ${
            css.delete
          }`}
          type="button"
          onClick={toggleSelect}
        >
          +{/* +✔️ */}
        </button>
        <span className={css.text}>
          <span className={css.level}>{`Lv${lvl} `}</span>
          <span className={css.name}>{name + " "}</span>
        </span>
      </div>
    </div>
  );
};
