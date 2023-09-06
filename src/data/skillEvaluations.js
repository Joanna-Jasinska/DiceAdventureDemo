import { OTHER } from "./skillEvaluation/other";
import { PIECE } from "./skillEvaluation/piece";
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

export const SKILL_EVALUATION = {
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
  "2|PIECE|str/needle": [
    [OTHER, "NUMDICES", { value: 2 }],
    [
      PIECE,
      "PIECE",
      {
        obj: {
          allows: { types: ["strength", "needle"] },
          requires: { minDices: 2, maxDices: 2 },
        },
      },
    ],
  ],
  "1|PIECE|space-1": [
    [OTHER, "NUMDICES", { value: 1 }],
    [
      PIECE,
      "PIECE",
      {
        obj: {
          allows: {},
          requires: { valueSpace: 1, minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
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
  "1|PIECE|mana": [
    [OTHER, "NUMDICES", { value: 1 }],
    [
      PIECE,
      "PIECE",
      {
        obj: {
          allows: { types: ["mana"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
  //
};
