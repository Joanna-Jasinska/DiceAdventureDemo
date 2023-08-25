export const Dice = {
  roll(dice) {
    const rolledDice = dice;
    return rolledDice;
  },
  select(id, dices) {
    // returns all dices with the chosen dice selected
    // will work after i make dices to actually have id
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
};
