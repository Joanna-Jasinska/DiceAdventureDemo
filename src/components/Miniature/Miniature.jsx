import { PropTypes } from "prop-types";
import css from "./Miniature.module.css";

export const Miniature = ({
  url,
  alt = "😎\nIncognito",
  title,
  padding = false,
  bg,
}) => {
  // Image not found 😢
  return (
    <figure className={`${css.miniature}`}>
      <div
        className={`${css.imgFrame} ${padding ? css.padding : ""} ${
          bg ? css[bg] : ""
        }`}
      >
        {url && url !== "" ? (
          <img className={css.img} src={url} alt={`\n${alt}`} />
        ) : (
          <div className={css.textBox}>{alt}</div>
        )}
      </div>
      <figcaption className={css.figcaption}>{title || alt}</figcaption>
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
