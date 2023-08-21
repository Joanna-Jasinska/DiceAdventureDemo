export const Item = {
  stats: {
    selected: false,
  },
  initiate(data) {
    this.stats = { selected: false, ...data };
    console.log(`Initiating item`);
    console.table(this);
  },
  edit(data) {
    this.stats = { ...this.stats, ...data };
  },
  toggleSelection() {
    console.log(
      `Toggling ${this.stats.name} to ${
        !this.stats.selected ? "selected" : "not selected"
      }`
    );
    this.stats.selected = !this.stats.selected;
  },
};
