import { Item } from "./Item";
import { LeveledItem } from "./LeveledItem";

export const Items = {
  all: [],
  initiate(data) {
    let itemTemplate = { ...Item };
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
  serialise() {
    console.log("Serialising leveled items");
    // console.table(this);
    return [...this.all.map((item) => item.serialise())];
    // ----------------------------------------
    let leveledItems = this.all.map((item) => {
      let leveledTemplate = { ...LeveledItem };
      leveledTemplate.initiate(item);
      console.log(`leveledTemplate= ${leveledTemplate.serialise()}`);
      // console.table(leveledTemplate.serialise());
      return leveledTemplate.serialise();
    });
    console.log(`leveledItems= ${leveledItems}`);
    // console.table(leveledItems);

    return [...this.all.map((item) => item.serialise())];
    return [...leveledItems];
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
  deselectAllItems() {
    this.all.forEach((i) => i.deselect());
  },
};
