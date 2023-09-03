import { PropTypes } from "prop-types";
import css from "./LevelUps.module.css";
import { useDungeon } from "hooks";

export const LevelUps = ({ lv }) => {
  // const { lv, startedLv } = useDungeon();
  // const levelsEarned = startedLv && lv ? Math.max(0, startedLv - lv) : 0;
  const levelsEarned = lv || 0;
  return levelsEarned === 0 ? (
    <></>
  ) : (
    <div className={`${css.miniature}`}>
      <div className={`${css.imgFrame}`}>
        <div className={css.lv}>{levelsEarned}</div>
        <div className={css.textBoxContainer}>
          <div className={css.textBoxBack}>Lv</div>
          <div className={css.bgColorFront}>⮉</div>
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
