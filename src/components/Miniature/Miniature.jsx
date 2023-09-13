import { PropTypes } from "prop-types";
import css from "./Miniature.module.css";

export const Miniature = ({
  // url,
  // alt = "😎",
  // title,
  padding = false,
  bgTxtFront = "",
  bgTxtBack = "",
  children,
  bgColor = "#d7ca92",
}) => {
  return (
    <figure className={`${css.miniature} ${children ? css.extended : ""}`}>
      <div
        className={`${css.imgFrame} ${padding ? css.padding : ""} `}
        style={{ backgroundColor: `${bgColor}` }}
      >
        {/* {url && url !== "" ? (
          <img className={css.img} src={url} alt={`\n${alt}`} />
        ) : ( */}
        <div className={css.textBoxContainer}>
          <div className={css.textBoxBack}>{bgTxtBack}</div>
          <div className={css.textBoxFront}>{bgTxtFront}</div>
        </div>
        {/* )} */}
      </div>
      {children ? <div className={css.extension}> {children}</div> : ""}
    </figure>
  );
};
Miniature.propTypes = {
  bgTxtFront: PropTypes.string,
  bgTxtBack: PropTypes.string,
  bgColor: PropTypes.string,
  padding: PropTypes.bool,
  // title: PropTypes.object,
};
