import { getSkillEvalById } from "data/eq";
import { SKILL_EVALUATION } from "../skillEvaluations";
import { getSkillById } from "../skills";

const fetchSkillEvaluation = (id, state) => {
  // returns array of functions
  if (!id) return [];
  const found = getSkillEvalById(id) || [];
  // const found = SKILL_EVALUATION[id] || [];
  if (found.length === 0) return [];
  const sequence = [
    ...found.map((evaluation) => {
      const collection = evaluation[0] || { false: () => false };
      const evaId = evaluation.length > 0 ? evaluation[1] || false : false;
      const params = evaluation.length > 1 ? evaluation[2] || {} : {};
      const func = () => collection[evaId]({ params, state });
      // console.log(
      //   `Adding eval func collection[${evaId}](${params})`,
      //   evaluation
      // );
      return func;
    }),
  ];
  return sequence;
};

export const fetchSkillEvaluations = ({ itemId, state }) => {
  // returns false or array of functions to evaluate
  // const { evaluationId } = getSkillById(skillId);
  // const sequence = fetchSkillEvaluation(evaluationId, state);
  const sequence = fetchSkillEvaluation(itemId, state);
  if (sequence.length < 1) return false;
  console.log(`Skill evaluations for:`, itemId, sequence);
  return sequence;
};
