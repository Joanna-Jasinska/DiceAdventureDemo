// import { PropTypes } from "prop-types";
import css from "./PlayerAvatar.module.css";
import { useDungeon } from "hooks";
const getAvatarIcon = (percent) => {
  // 😎😁😄🥱😅🤨😠😟😲😬😭😫😱
  if (percent > 92) return "😎";
  if (percent > 86) return "😁";
  if (percent > 78) return "😄";
  if (percent > 70) return "🥱";
  if (percent > 62) return "😅";
  if (percent > 56) return "🤨";
  if (percent > 48) return "😠";
  if (percent > 40) return "😟";
  if (percent > 32) return "😲";
  if (percent > 26) return "😬";
  if (percent > 18) return "😫";
  return "😱";
};
const getBgColor = (percent) => {
  if (percent > 92) return "#89ffdd";
  if (percent > 86) return "#88ff76";
  if (percent > 78) return "#baff25";
  if (percent > 70) return "#fff835";
  if (percent > 62) return "#ffd735";
  if (percent > 56) return "#ff8f17";
  if (percent > 48) return "#ff6c17";
  if (percent > 40) return " #ff5900";
  if (percent > 32) return "#ff0000";
  if (percent > 26) return "#e30000";
  if (percent > 18) return "#bc0000";
  return "#220000";
  // return "#810000";
};

export const PlayerAvatar = ({ percent }) => {
  const { player } = useDungeon();
  const { life, maxLife } = player;
  const percentLife = percent ? percent : Math.ceil((100 * life) / maxLife);
  const faceIcon = getAvatarIcon(percentLife);
  const bgIconFront = "";
  const bgSideIcon = "";
  const bgColor = getBgColor(percentLife);
  return (
    <div
      className={`${css.miniature}`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className={`${css.imgFrame}`}>
        <div className={css.textBoxContainer}>
          <div className={css.textBoxBgSide}>{bgSideIcon}</div>
          <div className={css.textBoxBack}>{bgIconFront}</div>
          <div className={css.textBoxFront}>{faceIcon}</div>
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
