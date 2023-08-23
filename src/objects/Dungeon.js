import { ICONS } from "data/icons";
export const getIcon = (id) => {
  return ICONS.find((i) => i.id === id)
    ? ICONS.find((i) => i.id === id).icon
    : ICONS.find((i) => i.id === "default").icon;
};
export const getColor = (id) => {
  return ICONS.find((i) => i.id === id)
    ? ICONS.find((i) => i.id === id).color
    : ICONS.find((i) => i.id === "default").color;
};

export const Dungeon = {
  data: {
    name: "Dungeon",
    eventName: "Generic Dungeon.js",
    id: "dungeon|1|",
    eventId: "dungeon|1|1",
    lvStarted: 1,
    lvReached: 2,
    gold: 100,
    ally: {},
    items: [],
    enemies: [],
    bosses: [],
  },

  initiate(data) {
    this.data = { ...this.data, ...data };
    return this;
  },

  serialise() {
    return this.data;
  },

  getRandom() {
    return this.data;
  },
};
