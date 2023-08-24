import { EnemyPiece } from "./EnemyPiece/EnemyPiece";
import css from "./EnemyBody.module.css";
import { Title } from "components/Phonebook/Title/Title";

export const EnemyBody = (enemyGiven) => {
  const enemyTemplate = {
    name: "Enemy",
    pieces: [
      {
        bodyPartIcon: "👁‍🗨",
        bodyPartTypes: ["eye", "head"],
        allowMinValue: 4,
        allowMaxValue: -1,
        allowExactValues: [],
        reqExactValues: [],
        maxAmountOfDices: 2,
        reqAmountOfDices: 1,
        allowTypes: ["speed", "mana"],
        multipliedTypes: ["mana"],
        multipliedBy: 2,
        damageToPlayer: 1,
        effectsToPlayer: [],
        damageToEnemy: 1,
        effectsToEnemy: [],
        priority: true,
        id: "testpiece|Enemy|eye|1",
        key: "testpiece|Enemy|eye|1",

        // bonus: false, - unlocks after all priority and normal pieces are filled
        // keep: false, //player keeps its dices as extra dices for next turn
      },
    ],
    icon: "😈",
  };
  const enemy = { ...enemyTemplate, ...enemyGiven };
  return (
    <div className={css.body}>     
      {/* {...enemy.pieces[0]} */}
      <EnemyPiece p={enemy.pieces[0]} />
      <EnemyPiece p={enemy.pieces[0]} />
    </div>
  );
};
