const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const Dice = {
  roll(dice) {
    if (typeof dice.value === "number") return dice;
    const rolledDice = { ...dice, value: getRandomNum(1, dice.diceMax) };
    return rolledDice;
  },
  select(id, dices) {
    // returns all dices with the chosen dice selected
    // const found = dices.find((d) => d.id === id);
    // const selectedDice=found? {...found, selected: true} : {...dices[0], selected: true} ;
    // return [...dices.filter((dice)=>dice.id!==id), selectedDice];
    return [
      ...dices.map((d) => {
        if (d.id !== id) {
          return d;
        }
        return { ...d, selected: true };
      }),
    ];
  },
  deselect(id, dices) {
    return [
      ...dices.map((d) => {
        if (d.id !== id) {
          return d;
        }
        return { ...d, selected: false };
      }),
    ];
  },
};
