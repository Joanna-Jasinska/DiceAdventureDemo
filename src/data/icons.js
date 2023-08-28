export const getDiceTypeIcon = (type) => {
  const found = ICONS.find((i) => i.type === type);
  return found ? found.icon : "❔";
};
export const ICONS = [
  { type: "default", icon: "❔", color: "#4d472d", id: "default" },
  { type: "slashed", icon: "⚔️", color: "#fff", id: "" },
  { type: "needle", icon: "📌", color: "#fff", id: "" },
  { type: "smashed", icon: "🔨", color: "#fff", id: "" },
  { type: "magic", icon: "✨", color: "#fff", id: "" },
  { type: "toxic", icon: "☣️", color: "#fff", id: "" },
  { type: "heat", icon: "🔥", color: "#fff", id: "" },
  { type: "void", icon: "🕳", color: "#fff", id: "" },
  { type: "strength", icon: "💪", color: "#fff", id: "" },
  { type: "dexterity", icon: "🤸‍♂️", color: "#fff", id: "" },
  { type: "speed", icon: "🕒", color: "#fff", id: "" },
  { type: "stamina", icon: "🥧", color: "#fff", id: "" },
  { type: "mana", icon: "🌀", color: "#fff", id: "" },
  { type: "life", icon: "❤️", color: "#fff", id: "" },
  { type: "defense", icon: "🛡️", color: "#fff", id: "" },

  // { type: "ally", icon: "🧙", color: "#275674", id: "ally|1|" },
  // { type: "ally", icon: "🧝‍♀️", color: "#745c27", id: "ally|2|" },
  // { type: "ally", icon: "🧝🏻", color: "#4a7427", id: "ally|3|" },
  // { type: "ally", icon: "🧞‍♀️", color: "#742727", id: "ally|4|" },
  // { type: "ally", icon: "🦹‍♀️", color: "#4b2774", id: "ally|5|" },

  // { type: "ally", icon: "✨", color: "#fff", id: "ally|1|1" },
  // { type: "ally", icon: "✨", color: "#fff", id: "ally|1|magic" },
  // { type: "ally", icon: "🍭", color: "#fff", id: "ally|1|rainbow" },
  // { type: "ally", icon: "🧙", color: "#fff", id: "ally|1|wizard" },

  // { type: "ally", icon: "🦌", color: "#fff", id: "ally|2|2" },
  // { type: "ally", icon: "🦌", color: "#fff", id: "ally|2|stag" },
  // { type: "ally", icon: "🐕", color: "#fff", id: "ally|2|dog" },
  // { type: "ally", icon: "🧝", color: "#fff", id: "ally|2|elf" },

  // { type: "ally", icon: "🌾", color: "#fff", id: "ally|3|3" },
  // { type: "ally", icon: "🌾", color: "#fff", id: "ally|3|grass" },
  // { type: "ally", icon: "🐍", color: "#fff", id: "ally|3|snake" },
  // { type: "ally", icon: "👩🏾‍🌾", color: "#fff", id: "ally|3|hermit" },

  // { type: "ally", icon: "🪓", color: "#fff", id: "ally|4|4" },
  // { type: "ally", icon: "🪓", color: "#fff", id: "ally|4|axe" },
  // { type: "ally", icon: "🐎", color: "#fff", id: "ally|4|horse" },
  // { type: "ally", icon: "🧞‍♀️", color: "#fff", id: "ally|4|barbarian" },

  // { type: "ally", icon: "🔪", color: "#fff", id: "ally|5|5" },
  // { type: "ally", icon: "🔪", color: "#fff", id: "ally|5|dagger" },
  // { type: "ally", icon: "⛆", color: "#fff", id: "ally|5|fog" },
  // { type: "ally", icon: "🦹‍♀️", color: "#fff", id: "ally|5|rogue" },
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

export const getIcon = (type = "default") => {
  const found = ICONS.filter((i) => {
    return i.type === type;
  });
  return found
    ? Array.isArray(found)
      ? found[0]
      : found
    : { type: "default", icon: "", color: "#fff" };
};
