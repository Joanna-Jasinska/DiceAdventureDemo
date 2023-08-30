export const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const Dice = {
  roll(dice) {
    if (typeof dice.value === "number") return dice;
    const rolledDice = { ...dice, value: getRandomNum(1, dice.diceMax) };
    return rolledDice;
  },
  toggleSelect(id, dices) {
    return [
      ...dices.map((d) => {
        if (d.id !== id) {
          return d;
        }
        return { ...d, selected: !d.selected };
      }),
    ];
  },
  select(id, dices) {
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

  //
};
