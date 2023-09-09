import { SKILL_EXECUTION } from "data/skillExecutions";
import { getSkillById } from "../skills";
import { deleteAllSelectedDices } from "redux/combat/operations";

export const fetchSkillExecution = ({ skillId, state, usedDices }) => {
  // returns array of functions
  const id = getSkillById(skillId).actionId;
  if (!id) return [];
  const found = SKILL_EXECUTION[id] || [];
  if (found.length === 0) return [];
  const sequence = [
    ...found.map((exec) => {
      const collection = exec[0] || { false: () => false };
      const exeId = exec.length > 0 ? exec[1] || false : false;
      const params = exec.length > 1 ? exec[2] || {} : {};
      const func = () => collection[exeId]({ params, state, usedDices });
      //   console.log(
      //     `Adding eval func collection[${evaId}](${params})`,
      //     exec
      //   );
      return func;
    }),
  ];
  if (sequence.length < 1) return false;
  console.log(`data> skillExecs > SkillExecs for:`, skillId, sequence);
  return sequence;
};
