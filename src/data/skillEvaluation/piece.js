import { Piece } from "objects/Piece";
const validateInput = ({ piece, state }) => {
  if (!piece) return false;
  const { combat } = state;
  if (!combat) return false;
  const { rolledDices } = combat;
  if (!rolledDices) return false;
  const selectedDices = [...rolledDices.filter((d) => d.selected === true)];
  if (
    selectedDices === undefined ||
    !piece.requires ||
    selectedDices.length < 1
  )
    return false;

  return true;
};
const findAllowedDices = (piece, dicesUsed) => {
  // returns false or filtered array
  const arr = [...dicesUsed.filter((d) => Piece.diceIsAllowed(piece, d))];
  return arr.length < 1 ? false : arr;
};
const checkIfPieceFulfilled = (piece, dicesUsed) => {
  // returns array of dice ids or false
  const valueSum = dicesUsed.reduce((total, dice) => total + dice.value, 0);
  //   console.log(
  //     `minDices--------------- SKILL > EVA > PIECE > const bodyPieceEvaluation`
  //   );
  if (piece.requires.minDices && piece.requires.minDices > dicesUsed.length)
    return false;
  //   console.log(
  //     `maxDices--------------- SKILL > EVA > PIECE > const bodyPieceEvaluation`
  //   );
  if (piece.requires.maxDices && piece.requires.maxDices < dicesUsed.length)
    return false;
  //   console.log(
  //     `minSum--------------- SKILL > EVA > PIECE > const bodyPieceEvaluation`
  //   );
  if (piece.requires.minSum && piece.requires.minSum > valueSum) return false;
  const arr = [...dicesUsed.map((d) => d.id)];
  //   console.log(
  //     `success--------------- SKILL > EVA > PIECE > const bodyPieceEvaluation arr:`,
  //     arr
  //   );
  if (piece.requires.exactValues) {
    // !!!AAA!!! check if fulfilled when requiring exact values
    return arr;
  }
  return arr;
};

const bodyPieceEvaluation = ({ params, state }) => {
  // returns array of dice ids or false
  const piece = params.obj !== undefined ? params.obj : false;
  if (validateInput({ piece, state }) === false) return false;
  const { combat } = state;
  const { rolledDices } = combat;
  const selectedDices = [...rolledDices.filter((d) => d.selected === true)];
  const allowedDices = findAllowedDices(piece, selectedDices);
  //   console.log(
  //     `!allowedDices--------------- SKILL > EVA > PIECE > const bodyPieceEvaluation`
  //   );
  if (!allowedDices) return false;
  //   console.log(
  //     `!usedDicesIDArr--------------- SKILL > EVA > PIECE > const bodyPieceEvaluation`
  //   );
  const usedDicesIDArr = checkIfPieceFulfilled(piece, allowedDices);
  if (!usedDicesIDArr) return false;
  // -------------------------------------------------------------------------------------
  // now filter allowedDices to only dices needed
  //
  // -------------------------------------------------------------------------------------
  return usedDicesIDArr;
};
export const PIECE_SEV = {
  false: () => false,
  PIECE: bodyPieceEvaluation,
};
