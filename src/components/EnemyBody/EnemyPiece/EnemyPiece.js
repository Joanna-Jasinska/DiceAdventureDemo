import { getDiceTypeIcon } from "data/icons";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import css from "./../EnemyBody.module.css";
import { Dice } from "objects/Dice";
export const EnemyPiece = ({ p }) => {
  const onClick = () => {
    //  Dice.clickOnBodyPiece
  };
  return (
    <div
      className={`${css.piece} ${
        p.fulfilled ? css.fulfilled : p.disabled ? css.disabled : css.waiting
      }`}
    >
      <div className={css.modifierHolder}>
        {p.multipliedBy ? (
          <>
            <div className={css.modifier}>{`${p.multipliedBy}x `}</div>
            {p.multipliedTypes.map((t) => (
              <div className={css.modifier} key={`modifier|${t.id}`}>
                {getDiceTypeIcon(t)}
              </div>
            ))}{" "}
          </>
        ) : (
          ""
        )}{" "}
      </div>

      <div className={css.diceHolder}>
        <div className={css.displayedBodyPart}>{p.bodyPartIcon}</div>
        {/* <DiceIcon /> */}
        {p.dices ? p.dices.map((dice) => <DiceIcon {...dice} />) : ""}
      </div>
      <div className={css.damageHolder}></div>
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
