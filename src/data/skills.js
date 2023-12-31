export const getSkillById = (sid) => {
  const found = SKILLS[sid];
  // console.log(`eq.js > getBaseEqById looking for ${eid}, found:`, found);
  return found ? { ...skillTemplate, ...found } : skillTemplate;
};
const skillTemplate = {
  evaluationId: false,
  actionId: false,
};
export const SKILLS = {
  "Fairy Advisor|ADVISE|": {
    // "NOT WORKING Automatically arrange your dices.. but not always in a best way."
    evaluationId: false,
    actionId: false,
  },
  "Cheat Sheet|-|": {
    // "-"
    evaluationId: false,
    actionId: false,
  },
  "Martial Art Manual I|COMBO MOVE ||": {
    // "put 🟨🟩 to duplicate 🟨 dice"
    evaluationId: "2|PIECE|physical|trait",
    actionId: "1|COPY|x2",
  },
  "Scroll of Arcane Missles|INVOKE ARCANE|": {
    // "divide 1 into 3 ✨ dices - rerolled to same or lower value"
    evaluationId: "1|PIECE|magic",
    actionId: "1|VALUE|/3|ACC|(ACC|reroll-)x3",
  },
  "Lucky Clover|LUCKY ROLL|": {
    // "[(1)] => reroll for same or higher value "
    evaluationId: "1|PIECE|space-1",
    actionId: "1|REROLL+|",
  },
  "Old Broom|WITCH'S BROOM|": {
    // "Change 🌀 into one of 🔥❄️⚡ at random"
    evaluationId: "1|PIECE|mana",
    actionId: "1|RANDOM|HEAT/ICE/SHOCK|",
  },
  "Utiki Spear|CHARGE|": {
    // "combine STR/NEEDLE 2 dices to gain their combined value and max"
    evaluationId: "2|PIECE|str/needle",
    actionId: "2|ACC|NEEDLE|",
  },
  "Provisions Bag|SNACK|": {
    // "[🕒] [(1)🥧] => heal 1hp, get [🌀]=(1) "
    evaluationId: "2|PIECE|stamina|speed",
    actionId: "1|ACC|MANA|heal_1",
  },
};
