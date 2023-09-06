import { OTHER } from "./skillEvaluation/other";
import { PIECE } from "./skillEvaluation/piece";
import { getSkillById } from "./skills";

const fetchSkillEvaluation = (id, state) => {
  // returns array of functions
  if (!id) return [];
  const found = SKILL_EVALUATION[id] || [];
  if (found.length === 0) return [];
  const sequence = [
    ...found.map((evaluation) => {
      const collection = evaluation[0] || { false: () => false };
      const evaId = evaluation.length > 0 ? evaluation[1] || false : false;
      const params = evaluation.length > 1 ? evaluation[2] || {} : {};
      const func = () => collection[evaId]({ params, state });
      //   console.log(
      //     `Adding eval func collection[${evaId}](${params})`,
      //     evaluation
      //   );
      return func;
    }),
  ];
  return sequence;
};

export const evaluateSkill = ({ skillId, state }) => {
  const { evaluationId } = getSkillById(skillId);
  const sequence = fetchSkillEvaluation(evaluationId, state);
  // getSkillById(skillId).evaluationId
  //{
  // "[(📌)] => reroll (📌) into [1] or [max value]"
  //     evaluationId: "1|PIECE|needle",
  //     actionId: false,
  //   },
  if (sequence.length < 1) return false;
  return sequence;
  //   return sequence.join(" | ");
  //   const success=sequence.
};

// allows: {
//     types: ["physical", "magic", "elemental", "speed"],
//     minValue: -1,
//     maxValue: -1,
//     exactValues: ["even"],
//     maxDices: false,
//   },
// requires: {
//     exactValues: false,
//     minDices: 1,
//     maxDices: 1, // <- added just for skill evaluation
//     minSum: 3,
//   },

const SKILL_EVALUATION = {
  "2|PIECE|stamina|speed": [
    [OTHER, "NUMDICES", { value: 2 }],
    [
      PIECE,
      "PIECE",
      {
        obj: {
          allows: { types: ["stamina"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
    [
      PIECE,
      "PIECE",
      {
        obj: {
          allows: { types: ["speed"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
  "1|PIECE|": [[OTHER, "NUMDICES", { value: 1 }]],
  "1|PIECE|needle": [
    [OTHER, "NUMDICES", { value: 1 }],
    [
      PIECE,
      "PIECE",
      {
        obj: {
          allows: { types: ["needle"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
  //
};
