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
  const requiredIcons = Piece.getReqIcons(p);
  // const allowedTypes = p.allows ? (p.allows.types ? p.allows.types : []) : [];
  const weaknessTypes = p.weakness ? p.weakness : [];

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
  }, [toDispatch, dispatch]);

  return (
    <div
      className={`${css.piece} ${
        p.fulfilled ? css.fulfilled : p.disabled ? css.disabled : css.waiting
      }`}
    >
      <div className={css.leftHolder}>
        {!weaknessTypes
          ? ""
          : weaknessTypes.map((type, index) =>
              type === "any" ? (
                ""
              ) : (
                <DiceIcon
                  type={type}
                  value={``}
                  key={`weaknessDiceType|${p.id}|${type}${index}`}
                />
              )
            )}
        {/* {!allowedTypes
          ? ""
          : allowedTypes.map((type, index) =>
              type === "any" ? (
                ""
              ) : (
                <DiceIcon
                  type={type}
                  value={``}
                  key={`allowedDiceType|${p.id}|${type}${index}`}
                  // onClick={() => console.log(`[${type}]`)}
                />
              )
            )} */}
      </div>

      <div className={css.middleContainer} onClick={onDiceHolderClick}>
        <div className={css.displayedBodyPart}>{p.bodyPartIcon}</div>
        <div className={css.diceHolder}>
          {p.dices
            ? p.dices.map((dice, index) => (
                <DiceIcon {...dice} key={`pieceDice|${dice.type}|${index}`} />
              ))
            : ""}
        </div>
        <div className={css.requiredHolder}>
          <div className={css.req}></div>
          {requiredIcons
            ? requiredIcons.map((i, index) => (
                <PieceIcon {...i} key={`pieceIcon|${p.id}|${index}`} />
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
