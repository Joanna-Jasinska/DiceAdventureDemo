import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import { useGame } from "hooks/useGame";
import css from "./PlayerLvAvatar.module.css";

export const PlayerLvAvatar = ({ shrink = false }) => {
  const { playerLv } = useGame();
  return (
    <div className={`${css.avatar} ${shrink ? css.shrink : ""}`}>
      <div className={css.lv} data-text={playerLv}>
        Lv
      </div>
      <div className={css.avatarBox}>
        <PlayerAvatar percent={Math.min(playerLv + 31, 100)} />
      </div>
    </div>
  );
};
