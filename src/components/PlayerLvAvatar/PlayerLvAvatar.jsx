import { PlayerAvatar } from "components/PlayerAvatar/PlayerAvatar";
import css from "./PlayerLvAvatar.module.css";
import { useGame } from "hooks/useGame";
export const PlayerLvAvatar = () => {
  const { playerLv } = useGame();
  return (
    <div className={css.avatar}>
      <div className={css.lv} data-text={playerLv}>
        Lv
      </div>
      <PlayerAvatar percent={Math.min(playerLv + 31, 100)} />
    </div>
  );
};
