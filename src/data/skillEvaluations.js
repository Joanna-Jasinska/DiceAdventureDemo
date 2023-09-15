import { OTHER_SEV } from "./skillEvaluation/other";
import { PIECE_SEV } from "./skillEvaluation/piece";
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

// PIECE evaluation only checks allowed dices
// so if there are more selected dices then needed it wont return false
// made that way to allow multiple PIECE evaluations in one skill evaluation
// thats why NUMDICES is needed - to return false when too many dices selected
// (avoids confusion what dices will be used)
// after all evaluations are done only id of dices used by PIECE evaluations will be returned
export const SKILL_EVALUATION = {
  "1|PIECE|space-1": [
    [OTHER_SEV, "NUMDICES", { value: 1 }],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: {},
          requires: { valueSpace: 1, minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
  "1|PIECE|magic": [
    [OTHER_SEV, "NUMDICES", { value: 1 }],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: { types: ["magic"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
  "1|PIECE|mana": [
    [OTHER_SEV, "NUMDICES", { value: 1 }],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: { types: ["mana"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
  "1|PIECE|speed/dexterity/strength": [
    [OTHER_SEV, "NUMDICES", { value: 1 }],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: { types: ["speed", "dexterity", "strength"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
  ],
  "2|PIECE|physical|trait": [
    [OTHER_SEV, "NUMDICES", { value: 2 }],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: { types: ["physical"] },
          requires: { minDices: 1 },
        },
      },
    ],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: { types: ["trait"] },
          requires: { minDices: 1 },
        },
      },
    ],
  ],
  "2|PIECE|stamina|speed": [
    [OTHER_SEV, "NUMDICES", { value: 2 }],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: { types: ["stamina"] },
          requires: { minDices: 1, maxDices: 1 },
        },
      },
    ],
    [
      PIECE_SEV,
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
    [OTHER_SEV, "NUMDICES", { value: 2 }],
    [
      PIECE_SEV,
      "PIECE",
      {
        obj: {
          allows: { types: ["strength", "needle"] },
          requires: { minDices: 2, maxDices: 2 },
        },
      },
    ],
  ],
  //
};
