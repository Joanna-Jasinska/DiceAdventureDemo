import { Dice } from "objects/Dice";
import { addDice, addRolledDice, updateDice } from "redux/combat/operations";

function generateId(source = "createdBySkill") {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return `DICE|${source}|${id}`;
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
  // id: `DICE|createdBySkill|${generateId()}`,
  value: 0,
};
const diceTemplate = {
  item: "dice",
  type: "any",
  diceMax: 0,
  // id: `DICE|createdBySkill|${generateId()}`,
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
const ChangeToRandom = ({ params, state, usedDices }) => {
  // returns dispatch that will deselect and change x dices of combat rolledDices
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
const Reroll = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  if (validateInput({ dice: true, numDices, state, usedDices }) === false)
    return false;
  let dicesGained = [];
  const diceArr = [];
  for (let i = 0; i < numDices; i++) {
    let dice = {
      ...rolledDiceTemplate,
      id: generateId("RerollMinus"),
      ...usedDices.pop(),
    };
    // const maxValue = dice.value;
    let rolledDice = Dice.roll({
      ...diceTemplate,
      id: generateId("RerollMinus"),
      ...dice,
      value: undefined,
    });
    // rolledDice.value = Math.min(rolledDice.value, maxValue);
    dicesGained.push(rolledDice);
    // dicesGained.push(() => updateDice({ ...rolledDice, selected: false }));
  }
  if (dicesGained.length > 0) {
    usedDices.unshift(dicesGained);
    return [
      ...dicesGained.map((d) => () => updateDice({ ...d, selected: false })),
    ];
  }
  return false;
};
const RerollMinusR = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  if (validateInput({ dice: true, numDices, state, usedDices }) === false)
    return false;
  let dicesGained = [];
  const diceArr = [];
  for (let i = 0; i < numDices; i++) {
    let dice = {
      ...rolledDiceTemplate,
      id: generateId("RerollMinus"),
      ...usedDices.pop(),
    };
    const maxValue = dice.value;
    let rolledDice = Dice.roll({
      ...diceTemplate,
      id: generateId("RerollMinus"),
      ...dice,
      value: undefined,
    });
    rolledDice.value = Math.min(rolledDice.value, maxValue);
    dicesGained.push(rolledDice);
    // dicesGained.push(() => updateDice({ ...rolledDice, selected: false }));
  }
  if (dicesGained.length > 0) {
    // usedDices.unshift(dicesGained);
    return [
      ...dicesGained.map((d) => () => updateDice({ ...d, selected: false })),
    ];
  }
  return false;
};
const RerollMinus = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  if (validateInput({ dice: true, numDices, state, usedDices }) === false)
    return false;
  let dicesGained = [];
  const diceArr = [];
  for (let i = 0; i < numDices; i++) {
    let dice = {
      ...rolledDiceTemplate,
      id: generateId("RerollMinus"),
      ...usedDices.pop(),
    };
    const maxValue = dice.value;
    let rolledDice = Dice.roll({
      ...diceTemplate,
      id: generateId("RerollMinus"),
      ...dice,
      value: undefined,
    });
    rolledDice.value = Math.min(rolledDice.value, maxValue);
    dicesGained.push(rolledDice);
    // dicesGained.push(() => updateDice({ ...rolledDice, selected: false }));
  }
  if (dicesGained.length > 0) {
    usedDices.unshift(dicesGained);
    return [
      ...dicesGained.map((d) => () => updateDice({ ...d, selected: false })),
    ];
  }
  return false;
};
const RerollPlusR = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  if (validateInput({ dice: true, numDices, state, usedDices }) === false)
    return false;
  let dicesGained = [];
  const diceArr = [];
  for (let i = 0; i < numDices; i++) {
    let dice = {
      ...rolledDiceTemplate,
      id: generateId("RerollMinus"),
      ...usedDices.pop(),
    };
    // const maxValue = dice.value;
    const minValue = dice.value;
    let rolledDice = Dice.roll({
      ...diceTemplate,
      id: generateId("RerollMinus"),
      ...dice,
      value: undefined,
    });
    // rolledDice.value = Math.min(rolledDice.value, maxValue);
    rolledDice.value = Math.max(rolledDice.value, minValue);
    dicesGained.push(rolledDice);
    // dicesGained.push(() => updateDice({ ...rolledDice, selected: false }));
  }
  if (dicesGained.length > 0) {
    // usedDices.unshift(dicesGained);
    return [
      ...dicesGained.map((d) => () => updateDice({ ...d, selected: false })),
    ];
  }
  return false;
};
const RerollPlus = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  if (validateInput({ dice: true, numDices, state, usedDices }) === false)
    return false;
  let dicesGained = [];
  const diceArr = [];
  for (let i = 0; i < numDices; i++) {
    let dice = {
      ...rolledDiceTemplate,
      id: generateId("RerollMinus"),
      ...usedDices.pop(),
    };
    // const maxValue = dice.value;
    const minValue = dice.value;
    let rolledDice = Dice.roll({
      ...diceTemplate,
      id: generateId("RerollMinus"),
      ...dice,
      value: undefined,
    });
    // rolledDice.value = Math.min(rolledDice.value, maxValue);
    rolledDice.value = Math.max(rolledDice.value, minValue);
    dicesGained.push(rolledDice);
    // dicesGained.push(() => updateDice({ ...rolledDice, selected: false }));
  }
  if (dicesGained.length > 0) {
    usedDices.unshift(dicesGained);
    return [
      ...dicesGained.map((d) => () => updateDice({ ...d, selected: false })),
    ];
  }
  return false;
};
const ValueManipulation = ({ params, state, usedDices }) => {
  // returns dispatch that will deselect and change value of x dices of combat rolledDices
  // !!!AAA!!! not done
  const numDices = params.value !== undefined ? params.value : false;

  const math = params.obj !== undefined ? params.obj : false;
  if (validateInput({ dice: math, numDices, state, usedDices }) === false) {
    // console.log(`Something went wrong.`);
    return false;
  }
  // "Value Manipulation & Remove",
  //     {
  //       value: 1,
  //       obj: {
  //         setTo: ["diceMax"],
  //         // multiplyBy: [10],
  //         divideBy: [2],
  //         // add: [1],
  //         extraCopies: [2]
  //       },
  //     },
  let diceArr = [];
  let funcArr = [];
  for (let i = 0; i < numDices; i++) {
    let dice = {
      ...rolledDiceTemplate,
      id: generateId("ValueManipulation"),
      ...usedDices.pop(),
    };
    console.log(`will manipulate value of ${dice.id}`);
    let setTo = math.setTo && math.setTo[i] ? math.setTo[i] : false;
    let multiplyBy = math.multiplyBy ? math.multiplyBy[i] : false;
    let divideBy = math.divideBy ? math.divideBy[i] : false;
    let add = math.add ? math.add[i] : false;
    let extraCopies = math.extraCopies ? math.extraCopies[i] : false;
    let newDiceValue = setTo ? setTo : dice.value;
    if (newDiceValue === "diceMax" || dice.value > dice.diceMax)
      dice.value = dice.diceMax;
    if (multiplyBy) dice.value = dice.value * multiplyBy;
    if (divideBy) dice.value = Math.max(1, Math.floor(dice.value / divideBy));
    if (add) dice.value = Math.max(dice.value + add, 1);

    if (dice.value > dice.diceMax) dice.value = dice.diceMax;
    if (dice.value === undefined || dice.value === null)
      dice.value = Dice.roll(dice);
    diceArr.push({ ...dice });
    funcArr.push(() => updateDice({ ...dice }));
    if (extraCopies && extraCopies > 0)
      for (let i = extraCopies; i > 0; i--) {
        const newDice = JSON.parse(
          JSON.stringify({
            ...dice,
            id: `${generateId(`ValueManipulation||${i}`)}`,
          })
        );
        diceArr.push({ ...newDice });
        funcArr.push(() => addRolledDice({ ...newDice, selected: false }));
      }
  }
  // console.log(
  //   `data/skillExecution/ DICE > ValueManipulation, resulting dices:`,
  //   diceArr
  // );
  usedDices.unshift(...diceArr);
  console.log(
    `Value manipulation, functions[${funcArr.length}] - new usedDices`,
    usedDices
  );
  return funcArr.length > 0 ? funcArr : false;
};
const AccR = ({ params, state, usedDices }) => {
  // returns dispatch that will add 1 dice to combat rolledDices
  // which is accumulation of [params.value] amount of dices + dice [params.obj]
  // then removes all used dices from [state.usedDices]
  const numDices = params.value !== undefined ? params.value : false;
  const lastDice = params.obj !== undefined ? params.obj : false;
  if (validateInput({ dice: lastDice, numDices, state, usedDices }) === false)
    return false;
  let sumDice = {
    ...rolledDiceTemplate,
    id: generateId("Acc"),
  };
  for (let i = 0; i < numDices; i++) {
    const dice = usedDices.shift();
    sumDice.id = dice.id;
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
  if (sumDice.value < 1) sumDice.value = 1;
  if (typeof lastDice.diceMax === "number") {
    sumDice.diceMax += lastDice.diceMax;
  }
  if (lastDice.type) sumDice.type = lastDice.type;
  if (lastDice.id) sumDice.type = lastDice.id;

  if (sumDice.diceMax < 1) sumDice.diceMax = 1;
  if (sumDice.value > sumDice.diceMax) sumDice.value = sumDice.diceMax;
  // sumDice.id = generateId("Acc");
  // usedDices.unshift({ ...sumDice });
  return [() => updateDice({ ...sumDice, selected: false })];
  // return [() => addRolledDice({ ...sumDice, selected: false })];
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
    id: generateId("Acc"),
  };
  for (let i = 0; i < numDices; i++) {
    const dice = usedDices.shift();
    sumDice.id = dice.id;
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
  if (sumDice.value < 1) sumDice.value = 1;
  if (typeof lastDice.diceMax === "number") {
    sumDice.diceMax += lastDice.diceMax;
  }
  if (lastDice.type) sumDice.type = lastDice.type;
  if (lastDice.id) sumDice.type = lastDice.id;

  if (sumDice.diceMax < 1) sumDice.diceMax = 1;
  if (sumDice.value > sumDice.diceMax) sumDice.value = sumDice.diceMax;
  // sumDice.id = generateId("Acc");
  usedDices.unshift({ ...sumDice });
  return [() => updateDice({ ...sumDice, selected: false })];
  // return [() => addRolledDice({ ...sumDice, selected: false })];
};
const Keep = ({ params, state, usedDices }) => {
  // keeps x dices from further skill manpulation and will keep them after skill finishes
  const numDices = params.value !== undefined ? params.value : false;
  if (validateInput({ dice: true, numDices, state, usedDices }) === false)
    return false;
  let keep = [];
  console.log(`Will keep [${numDices}]`);
  for (let i = 0; i < numDices; i++) {
    const dice = usedDices.shift();
    keep.push(() => updateDice({ ...dice, selected: false }));
    console.log(`Dice to keep`, dice);
  }
  console.log(`Dices kept`, keep);
  return keep.length > 0 ? keep : false;
};
const func = () => {
  return [() => {}];
};

export const DICE_SEX = {
  false: () => false,
  Keep: Keep,
  "Acc into 1 Dice & Remove": AccR,
  "Acc into 1 Dice": Acc,
  "Change to Random Array": ChangeToRandom,
  Reroll: Reroll,
  "Reroll+ & Remove": RerollPlusR,
  "Reroll+": RerollPlus,
  "Reroll- & Remove": RerollMinusR,
  "Reroll-": RerollMinus,
  Create: Create,
  "Value Manipulation Array": ValueManipulation,
  // "Value from Array & Remove": func,
  //   "": func,
  //   "": func,
  //   "": func,
  //   "": func,
};
