export const getDiceTypeIcon = (type) => {
  const found = ICONS.find(
    (i) => i && typeof i === "object" && i.type === type && i.icon
  );
  return found ? found.icon : "❔";
};
// export const getIcon = (type = "default") => {
//   const found = ICONS.filter((i) => {
//     return i.type === type;
//   });
//   return found
//     ? Array.isArray(found)
//       ? found[0]
//       : found
//     : { type: "default", icon: "", color: "#fff" };
// };

export const diceTypeMatches = (diceType, mustMatchType) => {
  if (mustMatchType === "any" || diceType === "any") return true;
  const found = ICONS.find((i) => i.type === diceType);
  const diceFamily = found ? found.mainType : diceType;
  if (diceType === mustMatchType || diceFamily === mustMatchType) return true;
  return false;
};
// 🟨🟩🟦🟧 ------------------⬜️🟪⬛️🟫
export const ICONS = [
  { type: "default", icon: "❔", color: "#4d472d", id: "default" },
  { type: "playerAttack", icon: "🤝", color: "#4d472d", id: "default" },
  // ⚔️🤝

  { type: "any", mainType: "any", icon: " ", color: "#fff", id: "" },

  { type: "physical", mainType: "physical", icon: " ", color: "#fff", id: "" },
  // { type: "physical", mainType: "physical", icon: "🤛", color: "#fff", id: "" },
  { type: "slashed", mainType: "physical", icon: "⚔️", color: "#fff", id: "" },
  { type: "needle", mainType: "physical", icon: "📌", color: "#fff", id: "" },
  { type: "smashed", mainType: "physical", icon: "🔨", color: "#fff", id: "" },

  { type: "mana", mainType: "magic", icon: "🌀", color: "#fff", id: "" },
  { type: "magic", mainType: "magic", icon: " ", color: "#fff", id: "" },
  { type: "arcane", mainType: "magic", icon: "✨", color: "#fff", id: "" },
  { type: "toxic", mainType: "magic", icon: "☣️", color: "#fff", id: "" },
  { type: "void", mainType: "magic", icon: "🖤", color: "#fff", id: "" },
  { type: "rainbow", mainType: "magic", icon: "🌈", color: "#fff", id: "" },

  {
    type: "elemental",
    mainType: "elemental",
    icon: " ",
    // icon: "💥",
    color: "#fff",
    id: "",
  },
  { type: "heat", mainType: "elemental", icon: "🔥", color: "#fff", id: "" },
  { type: "ice", mainType: "elemental", icon: "❄️", color: "#fff", id: "" },
  { type: "shock", mainType: "elemental", icon: "⚡️", color: "#fff", id: "" },
  { type: "poison", mainType: "elemental", icon: "💚", color: "#fff", id: "" },

  { type: "trait", mainType: "trait", icon: " ", color: "#fff", id: "" },
  { type: "speed", mainType: "trait", icon: "🕒", color: "#fff", id: "" },
  { type: "strength", mainType: "trait", icon: "💪", color: "#fff", id: "" },
  { type: "dexterity", mainType: "trait", icon: "🤸‍♂️", color: "#fff", id: "" },
  { type: "perception", mainType: "trait", icon: "👁‍🗨", color: "#fff", id: "" },
  { type: "wits", mainType: "trait", icon: "🧠", color: "#fff", id: "" },
  { type: "stamina", mainType: "trait", icon: "🥧", color: "#fff", id: "" },

  { type: "life", icon: "❤️", color: "#fff", id: "" },
  { type: "defense", icon: "🛡️", color: "#fff", id: "" },
];

//🥣🧉🍯🥧🌿🦌🦡🐎🦅🐕
//👨‍🌾👩🏻‍🌾👩‍🌾👩🏼‍🌾👩🏽‍🌾👩🏾‍🌾🧙‍♀️🧙🏼‍♀️👩🏾‍🌾
//🧝‍♀️🧝🧝‍♂️🧝🏻🧝🏼‍♀️🧝🏼🧝🏼‍♂️🧝🏽🧝🏾🧙🏼‍♀️👨‍🌾💂
// 🧙‍♀️ 🧙🧛‍♀️🧝🧜‍♂️ 🧚‍♀️🧜‍♀️🧟🧞‍♀️ 🧞💂🦹‍♀️🕵️👩‍🔬👨‍🌾
// ⛲️🏔🌅🌲🌳🌼🌻🏝🕳️🏰🦇🌙🌋🌾
// 🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🐚🌾💐🌷🌹🥀🌺🌸
// 🦯🔨⚒🛠⛏🪓🔪🗡🗡️⚔️🧹🥢⚜️
// 🏹⛓👢🏃
// 🍭🎇✨🔮📖⚚
// 🛡️🔰 🎻🎺🥁
// ⚡️ ☄️ 💥 🔥💦🌊💨⭐️💧🕸❄️🌫🌪 🌈 ☀️🎯🩸🙏👊✊❤️☣️💯 💢 ♨️❗️❔ ‼️ ⁉️🌀➰🧠🌌
// 🎵 🎶✔️ ☑️🔵🔷🔹♠️ ♣️ ♥️ ♦️🕒👁‍🗨 💬🏴‍☠️💀 ☠️✊ 👊 🤛💪
