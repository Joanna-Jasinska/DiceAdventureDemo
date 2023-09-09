import { Dice } from "objects/Dice";
import { addDice, addRolledDice, updateDice } from "redux/combat/operations";

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
function getRandomSlot(arr) {
  if (!arr) return null;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
const rolledDiceTemplate = {
  item: "dice",
  type: "any",
  diceMax: 0,
  id: `DICE|createdBySkill|${generateId()}`,
  value: 0,
};
const diceTemplate = {
  item: "dice",
  type: "any",
  diceMax: 0,
  id: `DICE|createdBySkill|${generateId()}`,
  //   value: 0,
};
const validateInput = ({ dice, numDices, state, usedDices }) => {
  if (!dice) return false;
  if (!numDices) return false;
  //   const { usedDices } = state;
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
const ChangeToRandom = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  const diceRange = params.obj !== undefined ? params.obj : false;
  if (validateInput({ dice: diceRange, numDices, state, usedDices }) === false)
    return false;
  //   value: 1,
  //   obj: {
  //     type: ["speed",..],
  //     diceMax: [20,..],
  //     value: [1,"diceMax"],
  //   },
  let diceArr = [];
  for (let i = 0; i < numDices; i++) {
    let dice = { ...usedDices[i] };
    console.log(`dice.js > ChangeToRandom > will be changing dice`, dice);
    // let sumDice = { ...diceTemplate, ...dice };
    const newDiceMax = getRandomSlot(diceRange.diceMax);
    if (
      newDiceMax !== null &&
      newDiceMax !== undefined &&
      newDiceMax !== "diceMax"
    )
      dice.diceMax = newDiceMax;
    if (dice.diceMax < 1) dice.diceMax = 1;
    const newDiceValue = getRandomSlot(diceRange.value);
    if (
      newDiceValue !== null &&
      newDiceValue !== undefined &&
      newDiceValue !== "diceMax"
    )
      dice.value = newDiceValue;
    if (newDiceValue === "diceMax" || dice.value > dice.diceMax)
      dice.value = dice.diceMax;
    if (diceRange.type && diceRange.type.length > 0)
      dice.type = getRandomSlot(diceRange.type);
    if (dice.value === undefined) dice.value = Dice.roll(dice);
    diceArr.push({ ...dice });
  }
  // return [() => {}];
  return [
    ...diceArr.map((dice) => () => updateDice({ ...dice, selected: false })),
  ]; //!!!
};
const Create = ({ params, state }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]

  //   value: 1,
  //   // arr:[1,"max"],
  //   obj: {
  //     type: "speed",
  //     diceMax: 20,
  //     // value: 1,
  //   },
  const numDices = params.value !== undefined ? params.value : false;
  const lastDice = params.obj !== undefined ? params.obj : false;
  if (
    validateInput({ dice: lastDice, numDices, state, usedDices: true }) ===
    false
  )
    return false;
  let sumDice = {
    ...diceTemplate,
    id: `DICE|CREATE|createdBySkill|${generateId()}`,
    ...lastDice,
  };
  if (sumDice.diceMax < 1) sumDice.diceMax = 1;
  if (sumDice.value === undefined) sumDice = Dice.roll(sumDice);
  if (sumDice.value > sumDice.diceMax) sumDice.value = sumDice.diceMax;
  return [() => addRolledDice({ ...sumDice, selected: false })];
};
const RerollPlus = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  if (validateInput({ dice: true, numDices, state, usedDices }) === false)
    return false;
  let dicesGained = [];
  usedDices.forEach((dice) => {
    const minValue = dice.value;
    let rolledDice = Dice.roll({
      ...diceTemplate,
      id: `DICE|REROLL+|createdBySkill|${generateId()}`,
      ...dice,
      value: undefined,
    });
    console.log(
      `Reroll+ adding dice [${rolledDice.value}]or[${minValue}]`,
      rolledDice
    );
    rolledDice.value = Math.max(rolledDice.value, dice.value);
    dicesGained.push(() => addRolledDice({ ...rolledDice, selected: false }));
  });

  //   if (sumDice.diceMax < 1) sumDice.diceMax = 1;
  //   if (sumDice.value > sumDice.diceMax) sumDice.value = sumDice.diceMax;
  return dicesGained.length > 0 ? dicesGained : () => {};
};
const Acc = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  const lastDice = params.obj !== undefined ? params.obj : false;
  if (validateInput({ dice: lastDice, numDices, state, usedDices }) === false)
    return false;
  let sumDice = {
    ...rolledDiceTemplate,
    id: `DICE|ACC|createdBySkill|${generateId()}`,
  };
  for (let i = 0; i < numDices; i++) {
    const dice = usedDices.shift();
    if (typeof dice.value === "number") {
      sumDice.value += dice.value;
    }
    if (typeof dice.diceMax === "number") {
      sumDice.diceMax = sumDice.diceMax + dice.diceMax;
    }
    if (dice.type) sumDice.type = dice.type;
    if (dice.id) sumDice.type = dice.id;
  }
  if (typeof lastDice.value === "number") {
    sumDice.value += lastDice.value;
  }
  if (typeof lastDice.diceMax === "number") {
    sumDice.diceMax += lastDice.diceMax;
  }
  if (lastDice.type) sumDice.type = lastDice.type;
  if (lastDice.id) sumDice.type = lastDice.id;

  if (sumDice.diceMax < 1) sumDice.diceMax = 1;
  if (sumDice.value > sumDice.diceMax) sumDice.value = sumDice.diceMax;
  return [() => addRolledDice({ ...sumDice, selected: false })];
};
const func = () => {
  return () => {};
};

export const DICE = {
  false: () => false,
  "Acc into 1 Dice & Remove": Acc,
  "Change to Random Array": ChangeToRandom,
  "Value Manipulation & Remove": func,
  "Reroll+ & Remove": RerollPlus,
  Create: Create,
  // "Value from Array & Remove": func,
  //   "": func,
  //   "": func,
  //   "": func,
  //   "": func,
};
