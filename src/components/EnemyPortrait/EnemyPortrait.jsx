import { PropTypes } from "prop-types";
import css from "./EnemyPortrait.module.css";
import { useEnemy } from "hooks/useEnemy";

export const EnemyPortrait = () => {
  const { portrait } = useEnemy();
  const {
    frontIcon,
    sideIcon,
    bgSideIcon,
    backIcon,
    bgIcon,
    filterColor,
    bgColor,
  } = portrait;
  // {
  //   //😬😠
  //   //🦴🌳📿🌲
  //   // 👹🟤🦂🐒🧸🦒
  //   frontIcon = "🐺",
  //   sideIcon = "🌿",
  //   bgSideIcon = "🌲",
  //   backIcon = "⚫️",
  //   bgIcon = "🌳",

  //   filterColor = "#005a124a",
  //   bgColor = "#ddd900",
  // }
  return (
    <figure className={`${css.miniature}`}>
      <div
        className={`${css.imgFrame}`}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className={css.textBoxContainer}>
          <div className={css.textBoxBgSide}>{bgSideIcon}</div>
          <div className={css.textBoxBg}>{bgIcon}</div>
          <div className={css.textBoxBack}>{backIcon}</div>
          <div className={css.textBoxFront}>{frontIcon}</div>
          <div
            className={css.textBoxSide}
            style={{ backgroundColor: `${filterColor}` }}
          >
            {sideIcon}
          </div>
        </div>
      </div>
    </figure>
  );
};
// Miniature.propTypes = {
//   url: PropTypes.string,
//   alt: PropTypes.string,
//   title: PropTypes.object,
//   padding: PropTypes.bool,
//   bg: PropTypes.string,
// };
