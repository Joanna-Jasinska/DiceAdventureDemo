import { Item } from "./Item";
import { LeveledItem } from "./LeveledItem";

export const Items = {
  all: [],
  initiate(data) {
    // let itemTemplate = { ...Item };
    let itemTemplate = { ...LeveledItem };
    this.all = [
      ...data.map((i, index) => {
        itemTemplate.initiate({ ...i, index: index });
        return { ...itemTemplate.serialise() };
      }),
    ];
    console.log("items-initiating------FINISHED");
  },
  serialise() {
    return this.all;
    let itemTemplate = { ...LeveledItem };
    this.all = [
      ...this.all.map((i, index) => {
        itemTemplate.initiate({ ...i, index: index });
        return { ...itemTemplate.serialise() };
      }),
    ];
    // ----------------------------------------
    console.log("Serialising leveled items");
    // console.table(this);
    // return [...this.all.map((item) => item.serialise())];
    // ----------------------------------------
    let leveledItems = this.all.map((item) => {
      let leveledTemplate = { ...LeveledItem };
      leveledTemplate.initiate(item);
      return leveledTemplate.serialise();
    });

    return [...leveledItems];
    return [...this.all.map((item) => item.serialise())];
  },
  findById: function (id) {
    const found = this.all.filter((item) => item.id === id);
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
