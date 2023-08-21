import { Item } from "./Item";

let itemTemplate = { ...Item };

export const Items = {
  all: [],
  initiate(data) {
    this.all = [
      ...data.map((i, index) => {
        itemTemplate.initiate({ ...i, index: index });
        return { ...itemTemplate };
      }),
    ];
  },
  edit(data) {
    this.stats = { ...this.stats, ...data };
  },
  findById: function (id) {
    const found = this.all.filter((item) => item.stats.id === id);
    console.log(`this:`);
    console.log(this);
    console.log(`Found item:`);
    console.table(found);
    console.log(`------------`);
    return found ? (Array.isArray(found) ? found[0] : found) : {};
  },
  updateItem(item) {
    const found = this.findById(item.id);
    if (found) {
      this.all = [
        { ...found, ...item },
        ...this.all.filter((i) => i.id !== item.id),
      ];
      return true;
    }
    return false;
  },
};
