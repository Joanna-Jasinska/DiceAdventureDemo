import { fetchSkillEvaluations } from "data/skillEvaluation/skillEvaluation";
import { fetchSkillExecution } from "data/skillsExecution/skillExecution";
import { deleteAllSelectedDices } from "redux/combat/operations";
const getDiceFromId = (id, dices) => {
  const found = dices.find((dice) => dice.id === id);
  return found || {};
};

export const Skill = {
  usedDices(skillId, state) {
    // returns false or array of dice ids
    // if false skill cannot be fired
    // those dices will be used by skill
    const arrayToTest = fetchSkillEvaluations({
      skillId,
      state,
    });
    // let result;
    if (!arrayToTest) {
      console.log(`${skillId} had no evaluations to perform`);
      return false;
    }
    const arr = [...arrayToTest];
    // let txt = "";
    let success = true;
    let i = 0;
    while (success && i < arr.length) {
      const singleResult = arr[i]();
      if (singleResult === undefined || singleResult === false) {
        success = false;
      } else {
        if (singleResult !== true) {
          // txt += `<Test[${i}]> \n${singleResult.join("\n")}\n`;
          if (success !== true && success !== false) {
            success = [...success, ...singleResult];
          } else {
            success = [...singleResult];
          }
        }
      }
      i++;
    }
    // txt += `last iteration [${i - 1}] arr.length[${arr.length}]\n`;
    if (i !== arr.length) success = false;
    // result = { success, txt: txt };
    // if(success)console.log(txt);
    return success;
  },
  execute(skillId, state, diceIdArr) {
    // returns false or array of func to dispatch
    // if false skill cannot be fired
    // those dices will be used by skill
    // !!!AAA!!! make fun that will pull dice from selected by the id
    // console.log(`Skill.EXECUTE > diceIdArr`, diceIdArr);
    const usedDices = [
      ...diceIdArr.map((id) => {
        return getDiceFromId(id, state.combat.rolledDices);
      }),
    ];
    console.log(`Skill.EXECUTE > usedDices, diceIdArr`, usedDices, diceIdArr);
    const arrayToExecute = fetchSkillExecution({
      skillId,
      state,
      usedDices,
    });
    // let result;
    if (!arrayToExecute) {
      console.log(`${skillId} had no actions to execute`);
      return false;
    }
    const arr = [...arrayToExecute];
    // let txt = "";
    let funcList = true;
    // let funcList = [() => deleteAllSelectedDices()];
    let i = 0;
    // console.log(`----------Skill.execute [--------------------`);
    while (funcList && i < arr.length) {
      const singleResult = arr[i]();
      // console.log(`------- while  executing func-----------`, arr[i]);
      // console.log(
      //   `------- while  singleResult.length[${singleResult.length}]-----------`,
      //   singleResult
      // );
      if (singleResult === undefined || singleResult === false) {
        funcList = false;
      } else {
        if (singleResult !== true) {
          // txt += `<Test[${i}]> \n${singleResult.join("\n")}\n`;
          if (funcList !== true && funcList !== false) {
            funcList = [...funcList, ...singleResult];
          } else {
            funcList = [...singleResult];
          }
        }
      }
      i++;
    }

    // console.log(`----------] Skill.execute--------------------`);
    // txt += `last iteration [${i - 1}] arr.length[${arr.length}]\n`;
    if (i !== arr.length) {
      funcList = false;
    } else {
      if (funcList !== true && funcList !== false) {
        funcList = [...funcList, () => deleteAllSelectedDices()];
      } else {
        funcList = [() => deleteAllSelectedDices()];
      }
    }
    // result = { funcList, txt: txt };
    // if(funcList)console.log(txt);
    return funcList;
  },
};
