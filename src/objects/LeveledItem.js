const extractDices = (item) => {
  console.log("extractD-----------1 item received:");
  console.table(item);
  const lv = item.lv;
  // console.log("extractD-----------2");
  const stats = item.stats ? [...item.stats] : [];
  // console.log("extractD-----------2--2" + stats);
  const grow = item.statGrow ? [...item.statGrow] : [];
  // console.log("extractD-----------2--3" + grow); //here undefined
  const packedDices = [...stats, ...grow].filter((el) => el.item === "dice");
  console.log("extractD-----------3 packed dices:");
  console.table(packedDices);
  let leveledDices = [];
  // console.log("extractD-----------4");
  let nothing = packedDices.map((dice) => {
    // console.log("extractD-----------5");
    if (!!dice.existSinceLv && dice.existSinceLv > lv) return false;
    // console.log("extractD-----------5--2");
    const diceTemplate = {
      item: "dice",
      type: dice.type,
      value: !dice.value ? undefined : 0,
      diceMax: dice.diceMax,
    };
    // console.log("extractD-----------6");
    let tempDice = { ...diceTemplate, value: dice.value };
    // console.log("extractD-----------7");
    if (!!dice.valueGrowPerLevel && dice.valueMakesExtraDice) {
      // console.log("extractD-----------8");
      for (let i = dice.valueGrowPerLevel * lv; i > 0; i--) {
        // console.log("extractD-----------9");
        if (tempDice.value + 1 > tempDice.diceMax) {
          leveledDices.push({ ...tempDice });
          tempDice = { ...diceTemplate };
        }
        tempDice.value += 1;
      }
    }
    // console.log("extractD-----------10");
    if (!!dice.valueGrowPerLevel && !dice.valueMakesExtraDice) {
      // console.log("extractD-----------11");
      tempDice.value = Math.min(
        tempDice.diceMax,
        tempDice.value + dice.valueGrowPerLevel * lv
      );
    }

    // console.log("extractD-----------12");
    if (!!dice.levelMakesExtraDice && dice.amountOfLevelsForExtraDice) {
      // console.log("extractD-----------13");
      for (let i = Math.floor(lv / dice.amountOfLevelsForExtraDice); i > 0; i--)
        // console.log("extractD-----------14");
        leveledDices.push({ ...tempDice });
      tempDice = { ...diceTemplate };
    }
    console.log("extractD-----------15");
    leveledDices.push({ ...tempDice });
    // value: undefined //random
    // valueGrowPerLevel: 1,
    // valueMakesExtraDice: true,
    // levelMakesExtraDice: true,
    // amountOfLevelsForExtraDice: 5,
    return false;
  });
  console.log("extractD-----------16 leveledDices:");
  console.table(leveledDices);
  return leveledDices;
};

export const LeveledItem = {
  serialise() {
    console.log("Serialising leveled item:");
    console.table({
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
    });
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
    console.log("item-init-----------1--data given");
    console.table(data);
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
    console.log(
      `FINISHED initiating item --- ${this.name} Lv${this.lv} ${
        this.selected ? "[SELECTED]" : "[unequipped]"
      }`
    );
    console.table(this);
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
