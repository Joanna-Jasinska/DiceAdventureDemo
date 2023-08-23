const extractDices = (item) => {
  const lv = item.lv;
  const stats = item.stats ? [...item.stats] : [];
  const grow = item.statGrow ? [...item.statGrow] : [];
  const packedDices = [...stats, ...grow].filter((el) => el.item === "dice");
  let leveledDices = [];
  let nothing = packedDices.map((dice) => {
    if (!!dice.existSinceLv && dice.existSinceLv > lv) return false;
    const diceTemplate = {
      item: "dice",
      type: dice.type,
      value: !dice.value ? undefined : 0,
      diceMax: dice.diceMax,
    };
    let tempDice = { ...diceTemplate, value: dice.value };
    if (!!dice.valueGrowPerLevel && dice.valueMakesExtraDice) {
      for (let i = dice.valueGrowPerLevel * lv; i > 0; i--) {
        if (tempDice.value + 1 > tempDice.diceMax) {
          leveledDices.push({ ...tempDice });
          tempDice = { ...diceTemplate };
        }
        tempDice.value += 1;
      }
    }
    if (!!dice.valueGrowPerLevel && !dice.valueMakesExtraDice) {
      tempDice.value = Math.min(
        tempDice.diceMax,
        tempDice.value + dice.valueGrowPerLevel * lv
      );
    }

    if (!!dice.levelMakesExtraDice && dice.amountOfLevelsForExtraDice) {
      for (let i = Math.floor(lv / dice.amountOfLevelsForExtraDice); i > 0; i--)
        leveledDices.push({ ...tempDice });
      tempDice = { ...diceTemplate };
    }
    leveledDices.push({ ...tempDice });
    // value: undefined //random
    // valueGrowPerLevel: 1,
    // valueMakesExtraDice: true,
    // levelMakesExtraDice: true,
    // amountOfLevelsForExtraDice: 5,
    return false;
  });
  return leveledDices;
};

export const LeveledItem = {
  serialise() {
    // console.log("Serialising leveled item:");
    // console.table({
    //   dices: this.dices,
    //   name: this.name,
    //   alt: this.alt,
    //   skill: this.skill,
    //   statsTxT: this.statsTxT,
    //   lv: this.lv,
    //   selected: this.selected,
    //   index: this.index,
    //   id: this.id,
    //   stats: this.stats,
    //   statGrow: this.statGrow,
    // });
    return {
      dices: this.dices,
      name: this.name,
      alt: this.alt,
      skill: this.skill,
      statsTxT: this.statsTxT,
      lv: this.lv,
      selected: this.selected,
      index: this.index,
      id: this.id,
      stats: this.stats,
      statGrow: this.statGrow,
    };
  },
  initiate(data) {
    const dices = extractDices(data);
    this.dices = [...dices];
    this.name = data.name;
    this.alt = data.alt;
    this.skill = {
      skillName: `${data.skill ? data.skill.name : "no skill"}`,
      skillTxT: `${data.skill ? data.skill.txt : "---"}`,
      id: `${data.skill ? data.skill.id : "---"}`,
    };
    this.statsTxT = data.statsTxT;
    this.lv = data.lv;
    this.selected = data.selected;
    this.index = data.index;
    this.id = data.id;
    this.stats = data.stats || [];
    this.statGrow = data.statGrow || [];
    // console.log(
    //   `FINISHED initiating item --- ${this.name} Lv${this.lv} ${
    //     this.selected ? "[SELECTED]" : "[unequipped]"
    //   }`
    // );
    // console.table(this);
  },
  edit(data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
  },
  //   toggleSelection() {
  //     console.log(
  //       `Toggling ${this.stats.name} to ${
  //         !this.stats.selected ? "[SELECTED]" : "[unequipped]"
  //       }`
  //     );
  //     this.stats.selected = !this.stats.selected;
  //   },
  //   deselect() {
  //     this.stats.selected = false;
  //   },
};
