import { useDungeon } from "hooks";
import css from "./Background.module.css";

export const Background = () => {
  const { bg } = useDungeon();
  const { icon, eventIcon, flavorIcon, bgColor } = bg;
  return (
    <div className={css.background} style={{ backgroundColor: bgColor }}>
      <div className={`${css.front1} ${css.mainIcon}`} data-text={`${icon}`} />
      <div className={`${css.mid2} ${css.mainIcon}`} data-text={`${icon}`} />
      <div className={`${css.back3} ${css.mainIcon}`} data-text={`${icon}`} />
      <div
        className={`${css.front2} ${css.eventIcon}`}
        data-text={`${eventIcon}`}
      />
      <div
        className={`${css.mid3} ${css.eventIcon}`}
        data-text={`${eventIcon}`}
      />
      <div
        className={`${css.back1} ${css.eventIcon}`}
        data-text={`${eventIcon}`}
      />
      <div
        className={`${css.front3} ${css.flavorIcon}`}
        data-text={`${flavorIcon}`}
      />
      <div
        className={`${css.mid1} ${css.flavorIcon}`}
        data-text={`${flavorIcon}`}
      />
      <div className={`${css.mid4} ${css.mainIcon}`} data-text={`${icon}`} />
      <div
        className={`${css.back2} ${css.flavorIcon}`}
        data-text={`${flavorIcon}`}
      />
    </div>
  );
};
