import { getDiceTypeIcon, getIcon } from "data/icons";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import css from "./../EnemyBody.module.css";
import { Actions } from "objects/Actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCombat } from "hooks";
import { Piece } from "objects/Piece";
import { PieceIcon } from "./PieceIcon/PieceIcon";

export const EnemyPiece = ({ p }) => {
  const dispatch = useDispatch();
  const { rolledDices } = useCombat();
  const [toDispatch, editToDispatch] = useState([]);
  const damageIcons = Piece.getDmgIcons(p);
  // const requiredIcons = false;
  const requiredIcons = Piece.getReqIcons(p);
  const allowedTypes = Piece.getAllowedTypes(p);

  const onDiceHolderClick = () => {
    editToDispatch([
      ...toDispatch.concat(Actions.clickOnBodyPiece(p, rolledDices)),
    ]);
    // ;
  };

  useEffect(() => {
    const runDispatch = async () => {
      for (const dispatchFunc of toDispatch) {
        await dispatch(dispatchFunc());
      }
      editToDispatch([]);
    };

    if (toDispatch.length > 0) {
      runDispatch();
    }
  }, [toDispatch]);

  return (
    <div
      className={`${css.piece} ${
        p.fulfilled ? css.fulfilled : p.disabled ? css.disabled : css.waiting
      }`}
    >
      <div className={css.modifierHolder}>
        {!allowedTypes
          ? ""
          : allowedTypes.map((type, index) => (
              <div
                className={css.modifier}
                key={`allowedDiceType|${type}|${p.id}|${index}`}
              >
                {type}
              </div>
            ))}
        {p.multiplies && p.multiplies.multipliedBy ? (
          <div className={css.x2}>
            <div
              className={css.modifier}
            >{`${p.multiplies.multipliedBy}x `}</div>
            {p.multiplies.multipliedTypes.map((t) => (
              <div className={css.modifier} key={`modifier|${t.id}`}>
                {getDiceTypeIcon(t)}
              </div>
            ))}{" "}
          </div>
        ) : (
          ""
        )}{" "}
      </div>

      <div className={css.middleContainer} onClick={onDiceHolderClick}>
        <div className={css.displayedBodyPart}>{p.bodyPartIcon}</div>
        <div className={css.diceHolder}>
          {p.dices
            ? p.dices.map((dice, index) => (
                <DiceIcon
                  {...dice}
                  // value={dice.value}
                  // diceMax={dice.diceMax}
                  // icon={getIcon(dice.type).icon}
                  key={`pieceDice|${dice.type}|${index}`}
                />
              ))
            : ""}
        </div>
        <div className={css.requiredHolder}>
          <div className={css.req}></div>
          {requiredIcons
            ? requiredIcons.map((i, index) => (
                // <div className={css.req} key={`${p.id}|reqIcon|${index}`}>
                //   {i}
                // </div>
                <PieceIcon
                  {...i}
                  // value={dice.value}
                  // diceMax={dice.diceMax}
                  // icon={getIcon(dice.type).icon}
                  key={`pieceIcon|${p.id}|${index}`}
                />
              ))
            : ""}
        </div>
      </div>
      <div className={css.damageHolder}>
        {damageIcons
          ? damageIcons.map((i, index) => (
              <div className={css.dmg} key={`${p.id}|dmgIcon|${index}`}>
                {i}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

// bodyPartIcon: "👁",
// bodyPartTypes: ["eye", "head"],
// allowMinValue: 4,
// allowMaxValue: -1,
// allowExactValues: [],
// reqExactValues: [],
// maxAmountOfDices: 2,
// reqAmountOfDices: 1,
// allowTypes: ["speed", "mana"],
// multipliedTypes: ["mana"],
// multipleBy: 2,
// damageToPlayer: 1,
// effectsToPlayer: [],
// damageToEnemy: 1,
// effectsToEnemy: [],
// priority: true,
// id: "testpiece|Enemy|eye|1",
// key: "testpiece|Enemy|eye|1",

// // bonus: false, - unlocks after all priority and normal pieces are filled
// // keep: false, //player keeps its dices as extra dices for next turn
