import { PropTypes } from "prop-types";
import css from "./TravelCount.module.css";
import { useDungeon } from "hooks";

export const TravelCount = ({ count }) => {
  // const { lv, startedLv } = useDungeon();
  // const levelsEarned = startedLv && lv ? Math.max(0, startedLv - lv) : 0;
  const travels = count || "❔";
  return travels === false ? (
    <></>
  ) : (
    <div className={`${css.miniature}`}>
      <div className={`${css.imgFrame}`}>
        <div className={css.count}>{travels}</div>
        <div className={css.textBoxContainer}>
          <div className={css.textBoxBack}>🏃</div>
          <div className={css.bgColorFront}>🐪</div>
        </div>
      </div>
    </div>
  );
};
// Miniature.propTypes = {
//   url: PropTypes.string,
//   alt: PropTypes.string,
//   title: PropTypes.object,
//   padding: PropTypes.bool,
//   bg: PropTypes.string,
// };
