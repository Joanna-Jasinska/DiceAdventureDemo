// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./AllySquare.module.css";

export const AllySquare = ({
  name = "Ally",
  title = "",
  id,
  bgTxtFront,
  bgTxtBack,
  bgColor,
}) => {
  return (
    <div className={css.item} id={id}>
      <Miniature
        alt={name}
        bgTxtFront={bgTxtFront}
        bgTxtBack={bgTxtBack}
        bgColor={bgColor}
      />
      <div className={css.bar}>
        <div className={css.title}>
          <span>{title}</span>
        </div>
        <span className={css.text}>
          <span className={css.name}>{`${name}`}</span>
        </span>
      </div>
    </div>
  );
};
