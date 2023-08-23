import { PropTypes } from "prop-types";
import css from "./Miniature.module.css";

export const Miniature = ({
  url,
  alt = "😎",
  title,
  padding = false,
  bgTxtFront = "",
  bgTxtBack = "",
  children,
  bgColor = "#d7ca92",
}) => {
  return (
    <figure className={`${css.miniature}`}>
      <div
        className={`${css.imgFrame} ${padding ? css.padding : ""} `}
        style={{ backgroundColor: `${bgColor}` }}
      >
        {url && url !== "" ? (
          <img className={css.img} src={url} alt={`\n${alt}`} />
        ) : (
          <div className={css.textBoxContainer}>
            <div className={css.textBoxBack}>{bgTxtBack}</div>
            <div className={css.textBoxFront}>{bgTxtFront}</div>
          </div>
        )}
      </div>
      {children ? (
        <figcaption className={css.figcaption}>{children}</figcaption>
      ) : (
        ""
      )}
    </figure>
  );
};
Miniature.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.object,
  padding: PropTypes.bool,
  bg: PropTypes.string,
};
