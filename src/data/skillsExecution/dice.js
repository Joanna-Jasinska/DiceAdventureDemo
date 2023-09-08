function generateId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return id;
}
const diceTemplate = {
  item: "dice",
  // type:"heat",
  diceMax: 0,
  id: `ACC|TEMPLATE|${generateId()}`,
  value: 0,
};
const validateInput = ({ dice, numDices, state }) => {
  if (!dice) return false;
  if (!numDices) return false;
  const { usedDices } = state;
  if (!usedDices) return false;
  //   const { combat, usedDices } = state;
  //   if (!combat) return false;
  //   const { rolledDices } = combat;
  //   if (!rolledDices) return false;
  //   const selectedDices = [...rolledDices.filter((d) => d.selected === true)];
  //   if (selectedDices === undefined || !dice.requires || selectedDices.length < 1)
  //     return false;

  return true;
};
//
//
const Acc = ({ params, state }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  const lastDice = params.obj !== undefined ? params.obj : false;
  if (validateInput({ dice: lastDice, numDices, state }) === false)
    return false;
  const { usedDices } = state;
  console.log(
    `skill execution > DICE > ACC - dices before execution:`,
    usedDices
  );
  let sumDice = { ...diceTemplate };
  //   const { combat, usedDices } = state;
  //   const { rolledDices } = combat;
  for (let i = 0; 1 < numDices; i++) {
    const dice = usedDices.shift();
    if (typeof dice.value === "number") sumDice.value += dice.value;
    if (typeof dice.diceMax === "number") sumDice.diceMax += dice.diceMax;
    if (dice.type) sumDice.type = dice.type;
    if (dice.id) sumDice.type = dice.id;
  }
  if (typeof lastDice.value === "number") sumDice.value += lastDice.value;
  if (typeof lastDice.diceMax === "number") sumDice.diceMax += lastDice.diceMax;
  if (lastDice.type) sumDice.type = lastDice.type;
  if (lastDice.id) sumDice.type = lastDice.id;

  if (sumDice.diceMax < 1) sumDice.diceMax = 1;
  if (sumDice.value > sumDice.diceMax) sumDice.value = sumDice.diceMax;
  console.log(`finished skill execution > DICE > ACC - dices left:`, usedDices);
  return { ...sumDice };
};
const func = () => {};

export const DICE = {
  false: () => false,
  "Acc into 1 Dice & Remove": func,
  "Change to Random Array": func,
  "Value Manipulation & Remove": func,
  "Reroll+ & Remove": func,
  Create: func,
  "Value from Array & Remove": func,
  //   "": func,
  //   "": func,
  //   "": func,
  //   "": func,
};
