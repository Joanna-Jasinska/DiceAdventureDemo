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
  "Kitchen Knives|KNIFE THROW|": {
    // "[(📌)] => reroll (📌) into [1] or [max value]"
    evaluationId: "1|PIECE|needle",
    actionId: false,
  },
  "Lucky Clover|LUCKY ROLL|": {
    // "[(1)] => reroll for same or higher value "
    evaluationId: "1|PIECE|space-1",
    actionId: false,
  },
  "Old Broom|WITCH'S BROOM|": {
    // "Change 🌀 into one of 🔥❄️⚡ at random"
    evaluationId: "1|PIECE|mana",
    actionId: false,
  },
  "Utiki Spear|CHARGE|": {
    // "combine STR/NEEDLE 2 dices to gain their combined value and max"
    evaluationId: "2|PIECE|str/needle",
    actionId: false,
  },
  "Provisions Bag|SNACK|": {
    // "[🕒] [(1)🥧] => heal 1hp, get [🌀]=(1) "
    evaluationId: "2|PIECE|stamina|speed",
    actionId: false,
  },
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
};
