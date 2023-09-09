//
//

import { damagePlayer } from "redux/dungeon/operations";

const Heal = ({ params, state }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]

  //   value: 1,
  const toHeal = params.value !== undefined ? params.value : false;
  return [toHeal ? () => damagePlayer(-toHeal) : () => {}];
};

export const OTHER = {
  false: () => false,
  heal: Heal,
  //   "": func,
  //   "": func,
  //   "": func,
  //   "": func,
};
