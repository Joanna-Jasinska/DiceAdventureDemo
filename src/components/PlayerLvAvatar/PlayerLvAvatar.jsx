import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import css from "./PlayerLvAvatar.module.css";
import { useGame } from "hooks/useGame";
import { PLAYER_EXTRA_LEVELS } from "data/settings";
export const PlayerLvAvatar = () => {
  const { playerLv } = useGame();
  return (
    <div className={css.avatar}>
      <div className={css.lv} data-text={playerLv}>
        {/* <div className={css.lv} data-text={playerLv - PLAYER_EXTRA_LEVELS}> */}
        Lv
      </div>
      {/* <PlayerAvatar percent={Math.min(playerLv + 23, 100)} /> */}
      <PlayerAvatar percent={Math.min(playerLv + 31, 100)} />
    </div>
  );
};
