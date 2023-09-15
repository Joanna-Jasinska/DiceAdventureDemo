// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import { useDispatch } from "react-redux";
import css from "./QuestSquare.module.css";
// import { itemLvUpx1, itemLvUpx10, resetItemLv } from "redux/eq/operations";
// import {
//   gainSpLvUps,
//   payGold,
//   remove10SpLvUps,
//   remove1SpLvUp,
// } from "redux/game/operations";
// import { useGame } from "hooks/useGame";
import { SkillSquare } from "components/SkillSquare/SkillSquare";
import { StatIcon } from "components/StatIcon/StatIcon";
import { useGame } from "hooks/useGame";
import { unlockItem } from "redux/eq/operations";
import { lvUpAlly, payGold } from "redux/game/operations";
// {
//   dungeon: q.dungeon,
//   item: Items.getItemById({ id: q.item }),
//   locked,
//   index,
//   cost,
// }
export const QuestSquare = ({ item, locked, cost, ally }) => {
  // export const Quest = ({ dungeon, item, locked, index, cost }) => {
  const {
    name,
    itemId,
    icon,
    alt,
    tags = [""],
    lv = 1,
    dices,
    nondices,
    skill = { name: "NO SKILL", txt: "-", id: "noskill" },
  } = item;
  const { gold } = useGame();
  const dispatch = useDispatch();
  // const { maxEqLv, spareLvUps, gold } = useGame();

  const buy = (e) => {
    e.preventDefault();
    // increase ally lv
    // remove gold
    // get item
    dispatch(payGold(cost)).then((result) => {
      if (typeof result.payload !== "string") dispatch(lvUpAlly(ally));
      dispatch(unlockItem(itemId));
    });
  };

  return (
    <div className={css.item} id={itemId}>
      <Miniature
        url={icon}
        alt={alt || name}
        bgTxtFront={alt}
        bgTxtBack={tags[0]}
        children={
          <>
            <SkillSquare skill={skill} />
          </>
        }
      />
      <div className={css.bar}>
        {locked ? (
          <div className={`${css.selectButton} ${css.locked} `}>{locked}</div>
        ) : gold < cost ? (
          <div
            className={`${css.selectButton} ${css.locked} `}
          >{`Price\n${cost}💰`}</div>
        ) : (
          <button
            key={`${name}btnLvUp${itemId}`}
            className={`${css.selectButton} ${css.buy} `}
            type="button"
            onClick={buy}
          >
            -{cost}💰
          </button>
        )}

        <span className={css.text}>
          <span className={css.level}>{`${lv} `}</span>
          <span className={css.name}>{name + " "}</span>
        </span>
      </div>
      <div className={css.iconBag}>
        {(nondices ? nondices : []).map((el, index) => {
          return <StatIcon {...el} key={`${name}|${el.type}|${index}`} />;
        })}
        {(dices ? dices : []).map((el, index) => {
          return <DiceIcon {...el} key={`${name}|${el.type}|${index}`} />;
        })}
      </div>
    </div>
  );
};
