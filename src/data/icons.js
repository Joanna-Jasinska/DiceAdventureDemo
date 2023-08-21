export const ICONS = [
  { type: "default", icon: "⭐️", color: "#fff" },
  { type: "slashed", icon: "⚔️", color: "#fff" },
  { type: "needle", icon: "📌", color: "#fff" },
  { type: "smashed", icon: "🔨", color: "#fff" },
  { type: "magic", icon: "✨", color: "#fff" },
  { type: "toxic", icon: "☣️", color: "#fff" },
  { type: "heat", icon: "🔥", color: "#fff" },
  { type: "void", icon: "🕳", color: "#fff" },
  { type: "strength", icon: "💪", color: "#fff" },
  { type: "dexterity", icon: "🤸‍♂️", color: "#fff" },
  { type: "speed", icon: "🕒", color: "#fff" },
  { type: "stamina", icon: "🥧", color: "#fff" },
  { type: "mana", icon: "🌀", color: "#fff" },
  { type: "life", icon: "❤️", color: "#fff" },
  { type: "defense", icon: "🛡️", color: "#fff" },
];

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
