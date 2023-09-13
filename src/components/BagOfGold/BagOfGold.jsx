// import { PropTypes } from "prop-types";
import css from "./BagOfGold.module.css";
// import { useDungeon } from "hooks";

export const BagOfGold = ({ gold }) => {
  const goldEarned = 0;
  const goldDisplayed =
    !gold || typeof gold !== "number"
      ? `${goldEarned}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      : `${gold}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <div className={`${css.miniature}`}>
      <div className={`${css.imgFrame}`}>
        <div className={css.gold}>{goldDisplayed}</div>
        <div className={css.textBoxContainer}>
          <div className={css.textBoxBack}>💰</div>
          <div className={css.bgColorFront}></div>
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
