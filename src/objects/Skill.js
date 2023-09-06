import { evaluateSkill } from "data/skillEvaluation";

export const Skill = {
  usedDices(skillId, state) {
    // returns false or array of dice ids
    // if false skill cannot be fired
    // those dices will be used by skill
    const arrayToTest = evaluateSkill({
      skillId,
      state,
    });
    let result;
    const arr = [...arrayToTest];
    // let txt = "";
    let success = true;
    let i = 0;
    while (success && i < arr.length) {
      const singleResult = arr[i]();
      if (singleResult === undefined || singleResult === false) success = false;
      if (singleResult !== true && singleResult !== false) {
        // txt += `<Test[${i}]> \n${singleResult.join("\n")}\n`;
      }
      i++;
    }
    // txt += `last iteration [${i - 1}] arr.length[${arr.length}]\n`;
    if (i !== arr.length) success = false;
    // result = { success, txt: txt };
    // if(success)console.log(txt);
    return success;
  },
};
