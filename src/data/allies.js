export const getAlly = (id) => {
  return ALLIES.find(id);
};
export const ALLIES = [
  {
    name: "Tashka",
    id: "ally|4|",
    type: "barbarian",
    title: "Elite Rajavi Pathforcer",
    icon: "🧞‍♀️",
    eventIcon: "🪓",
    bgColor: "#742727",
  },
  {
    name: "Valathar",
    id: "ally|2|",
    type: "aristocrat",
    title: "Rajavi Aristocrat & Pathforcer",
    icon: "🧝‍♀️",
    eventIcon: "🦌",
    bgColor: "#745c27",
  },
  {
    name: "Zern",
    id: "ally|3|",
    type: "hunter",
    title: "Rajavi Hunter & Pathforcer",
    icon: "🧝🏻",
    eventIcon: "🌾",
    bgColor: "#4a7427",
  },
  {
    name: "Mir",
    id: "ally|5|",
    type: "rogue",
    title: "Elite Rajavi Pathforcer",
    icon: "🦹‍♀️",
    eventIcon: "🔪",
    bgColor: "#4b2774",
  },

  {
    name: "Ihlaoxeus",
    // name: "Xinaleus",
    id: "ally|1|",
    type: "wizard",
    title: "Rajavi Mage & Pathforcer",
    icon: "🧙",
    eventIcon: "✨",
    bgColor: "#275674",
  },

  //   { type: "ally", icon: "🍭", color: "#fff", id: "ally|1|rainbow" },
  //   { type: "ally", icon: "🐕", color: "#fff", id: "ally|2|dog" },
  //   { type: "ally", icon: "🐍", color: "#fff", id: "ally|3|snake" },
  //   { type: "ally", icon: "🐎", color: "#fff", id: "ally|4|horse" },
  //   { type: "ally", icon: "⛆", color: "#fff", id: "ally|5|fog" },
];

// rogue 🦹‍♀️ weapons, poisons
// barbarian🧞‍♀️ weapons, fighting styles
// wizard🧙 spells, familiars, potions
// elf 🧝‍♀️ artifacts, armor, medicine
// hunter🧝🏻 weapons, utility, beasts, food
//---deleted-----hermit👩🏾‍🌾 medicine
