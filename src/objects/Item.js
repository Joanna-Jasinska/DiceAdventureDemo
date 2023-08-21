export const Item = {
  stats: {
    selected: false,
  },
  serialise() {
    return { stats: this.stats };
  },
  initiate(data) {
    this.stats = { selected: false, ...data };
    // console.log(
    //   `Initiating item --- ${this.stats.name} Lv${this.stats.lv} ${
    //     this.stats.selected ? "[SELECTED]" : "[unequipped]"
    //   }`
    // );
    // console.table({ ...this, selected: false, ...data });
  },
  edit(data) {
    this.stats = { ...this.stats, ...data };
  },
  toggleSelection() {
    console.log(
      `Toggling ${this.stats.name} to ${
        !this.stats.selected ? "[SELECTED]" : "[unequipped]"
      }`
    );
    this.stats.selected = !this.stats.selected;
  },
  deselect() {
    this.stats.selected = false;
  },
};
