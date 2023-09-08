import { SKILL_EXECUTION } from "data/skillExecutions";
import { getSkillById } from "../skills";

export const fetchSkillExecution = ({ skillId, state }) => {
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
      const func = () => collection[exeId]({ params, state });
      //   console.log(
      //     `Adding eval func collection[${evaId}](${params})`,
      //     exec
      //   );
      return func;
    }),
  ];
  if (sequence.length < 1) return false;
  console.log(`Skill execs for:`, skillId, sequence);
  return sequence;
};
