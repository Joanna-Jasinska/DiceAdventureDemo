export const Item = {
  stats: {
    selected: false,
  },
  serialise() {
    return {
      selected: this.selected,
      id: this.id,
      // this.id= data.id;
      // const dices = extractDices(data);
      dices: this.dices,
      name: this.name,
      alt: this.alt,
      skill: this.skill,
      statsTxT: this.statsTxT,
      lv: this.lv,
      selected: this.selected,
      index: this.index,
    };
  },
  initiate(data) {
    this.selected = false;
    this.id = `${data.stats.name}|${data.stats.lv}|${data.stats.skillName}`;
    // this.id= data.id;
    // const dices = extractDices(data);
    this.dices = [...data.stats, ...data.statGrow];
    this.name = data.name;
    this.alt = data.alt;
    this.skill = {
      skillName: data.skill.name,
      skillTxT: data.skill.txt,
      id: data.skill.id,
    };
    this.statsTxT = data.statsTxT;
    this.lv = data.lv;
    this.selected = data.selected;
    this.index = data.index;
  },
  edit(data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
  },
  toggleSelection() {
    this.selected = !this.selected;
  },
  deselect() {
    this.stats.selected = false;
  },
};
