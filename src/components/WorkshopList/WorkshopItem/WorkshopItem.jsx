// import { PropTypes } from 'prop-types';
import { Miniature } from "components/Miniature/Miniature";
import css from "./WorkshopItem.module.css";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import { Title } from "components/Title/Title";
import { useDispatch } from "react-redux";
import { itemLvUpx1, itemLvUpx10, resetItemLv } from "redux/eq/operations";
import {
  gainSpLvUps,
  payGold,
  remove10SpLvUps,
  remove1SpLvUp,
} from "redux/game/operations";
import { useEQ } from "hooks/useEQ";
import { useGame } from "hooks/useGame";
import { SkillSquare } from "components/SkillSquare/SkillSquare";
import { StatIcon } from "components/StatIcon/StatIcon";

export const WorkshopItem = ({
  name,
  itemId,
  icon,
  alt,
  tags = [""],
  lv = 1,
  dices,
  nondices,
  index,
  selected = false,
  // nondices,
  // stats = [],
  skill = { name: "NO SKILL", txt: "-", id: "noskill" },
  // statsTxT='',
}) => {
  const dispatch = useDispatch();
  const { eq } = useEQ();
  const { maxEqLv, spareLvUps, gold } = useGame();

  const levelUp1 = (e) => {
    e.preventDefault();
    dispatch(remove1SpLvUp()).then((result) => {
      if (typeof result.payload !== "string")
        dispatch(itemLvUpx1({ index, itemId, lv, selected }));
    });
  };
  const levelUp10 = (e) => {
    e.preventDefault();
    dispatch(remove10SpLvUps()).then((result) => {
      if (typeof result.payload !== "string")
        dispatch(itemLvUpx10({ index, itemId, lv, selected }));
    });
  };
  const delevel10 = (e) => {
    e.preventDefault();
    // dispatch(resetItemLv({ index, itemId, selected })).then((result) => {
    //   if (typeof result.payload !== "string")
    //     dispatch(gainSpLvUps(result.payload[1]));
    //     dispatch(payGold(result.payload[1]));
    // });
  };
  const resetLvTo1 = (e) => {
    e.preventDefault();
    dispatch(resetItemLv({ index, itemId, selected })).then((result) => {
      if (typeof result.payload !== "string")
        dispatch(gainSpLvUps(result.payload[1]));
      dispatch(payGold(result.payload[1]));
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
            {/* {`${skill.name}`}
            <br />
            {`${skill.txt}`}
            <Title title={`${alt} ${name} (${index})${itemId}`} /> */}
            <SkillSquare skill={skill} />
          </>
        }
      />
      <div className={css.bar}>
        {lv < 2 || gold + 1 < lv ? (
          ""
        ) : (
          <button
            key={`${name}btnLv1${itemId}`}
            className={`${css.selectButton} ${css.delevel} ${css.delevelTo1} `}
            type="button"
            onClick={resetLvTo1}
          >
            ♻️
            {/* 💰 */}
          </button>
        )}

        {lv < 11 || gold < 10 ? (
          ""
        ) : (
          <button
            key={`${name}btnLv-10${itemId}`}
            className={`${css.selectButton} ${css.delevel} ${css.delevel10} `}
            type="button"
            onClick={delevel10}
          >
            -10
            {/* 💰 */}
          </button>
        )}

        {spareLvUps < 1 || lv + 1 > maxEqLv ? (
          ""
        ) : (
          <button
            key={`${name}btnLvUp${itemId}`}
            className={`${css.selectButton} ${css.levelUp} ${css.plus1} `}
            type="button"
            onClick={levelUp1}
          >
            +1
            {/* ⮉ */}
          </button>
        )}

        {spareLvUps < 1 || lv + 10 > maxEqLv ? (
          ""
        ) : (
          <button
            key={`${name}btnLvUp10${itemId}`}
            className={`${css.selectButton} ${css.levelUp} ${css.plus10} `}
            type="button"
            onClick={levelUp10}
          >
            +10
          </button>
        )}
        <span className={css.text}>
          <span className={css.level}>{`${lv} `}</span>
          <span className={css.name}>{name + " "}</span>
        </span>
      </div>
      <div className={css.iconBag}>
        {(nondices ? nondices : []).map((el, index) => {
          return (
            <StatIcon
              {...el}
              // diceMax={el.diceMax}
              // value={el.value}
              // icon={el.type}
              key={`${name}|${el.type}|${index}`}
            />
          );
        })}
        {(dices ? dices : []).map((el, index) => {
          return (
            <DiceIcon
              {...el}
              // diceMax={el.diceMax}
              // value={el.value}
              // icon={el.type}
              key={`${name}|${el.type}|${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};
