// import { PropTypes } from "prop-types";
import { useGame } from "hooks/useGame";
import css from "./PLvAvatar.module.css";
import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";

export const PLvAvatar = ({ shrink = false }) => {
  const { playerLv } = useGame();
  return (
    <div
      className={`${css.avatar} ${css.miniature} ${shrink ? css.shrink : ""}`}
    >
      <div className={`${css.imgFrame}`}>
        {/* <div className={css.lv}>{playerLv}</div> */}
        <div className={`${shrink ? css.noOverflow : ""}`}>
          <div className={`${css.avatarBox}`}>
            <PlayerAvatar percent={Math.min(playerLv + 62, 100)} />
            {/* <PlayerAvatar percent={Math.min(playerLv + 31, 100)} /> */}
          </div>
        </div>
        <div className={css.lv} data-text={`${playerLv}`}>
          .
        </div>
        {shrink ? <span className={`${css.lvLabel}`}>Lv</span> : ""}
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
