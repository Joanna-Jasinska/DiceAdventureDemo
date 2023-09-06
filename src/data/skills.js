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
    evaluationId: "1|PIECE|",
    actionId: false,
  },
  "Old Broom|WITCH'S BROOM|": {
    evaluationId: false,
    actionId: false,
  },
  "Utiki Spear|CHARGE|": {
    evaluationId: false,
    actionId: false,
  },
  "Provisions Bag|SNACK|": {
    evaluationId: "2|PIECE|stamina|speed",
    actionId: false,
  },
  "Fairy Advisor|ADVISE|": {
    evaluationId: false,
    actionId: false,
  },
  "Cheat Sheet|-|": {
    evaluationId: false,
    actionId: false,
  },
};
