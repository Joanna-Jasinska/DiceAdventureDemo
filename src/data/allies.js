export const getAlly = (id) => {
  return ALLIES.find(id);
};
export const ALLIES = [
  {
    name: "Ihlaoxeus",
    // name: "Xinaleus",
    id: "ally|1|",
    title: "Mage",
    icon: "🧙",
    eventIcon: "✨",
    bgColor: "#275674",
  },
  {
    name: "Valathar",
    id: "ally|2|",
    title: "Elf",
    icon: "🧝‍♀️",
    eventIcon: "🦌",
    bgColor: "#745c27",
  },
  {
    name: "Zern",
    id: "ally|3|",
    title: "Hunter",
    icon: "🧝🏻",
    eventIcon: "🌾",
    bgColor: "#4a7427",
  },
  {
    name: "Tashka",
    id: "ally|4|",
    title: "Barbarian",
    icon: "🧞‍♀️",
    eventIcon: "🪓",
    bgColor: "#742727",
  },
  {
    name: "Mir",
    id: "ally|5|",
    title: "Rogue",
    icon: "🦹‍♀️",
    eventIcon: "🔪",
    bgColor: "#4b2774",
  },

  //   { type: "ally", icon: "🍭", color: "#fff", id: "ally|1|rainbow" },
  //   { type: "ally", icon: "🐕", color: "#fff", id: "ally|2|dog" },
  //   { type: "ally", icon: "🐍", color: "#fff", id: "ally|3|snake" },
  //   { type: "ally", icon: "🐎", color: "#fff", id: "ally|4|horse" },
  //   { type: "ally", icon: "⛆", color: "#fff", id: "ally|5|fog" },
];
