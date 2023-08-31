import { useCombat } from "hooks";
import {
  deleteAllPieceDices,
  placeBodyPieceDice,
} from "redux/enemy/operations";
import { Piece } from "./Piece";
import {
  addMultipleRolledDice,
  deleteRolledDice,
} from "redux/combat/operations";

export const Actions = {
  // -----------------------------------------------------------------------------
  clickOnBodyPiece(piece, rolledDices) {
    console.log(`clickOnBodyPiece`);
    const toDispatch = [];
    const foundRD = rolledDices;
    const bag =
      foundRD && Array.isArray(foundRD) && foundRD.length > 0 ? foundRD : false;
    const foundSD = !!foundRD ? foundRD.filter((dice) => dice.selected) : false;
    const selectedDices =
      foundSD && Array.isArray(foundSD) && foundSD.length > 0 ? foundSD : false;
    const pieceDices =
      piece.dices && Array.isArray(piece.dices) && piece.dices.length > 0
        ? piece.dices
        : false;

    const returnAllPieceDicesToBag = () => {
      console.log(`Returning all piece dices to bag`);
      let diceArray = [];
      piece.dices.forEach((d) => {
        diceArray.push(d);
      });
      if (diceArray.length > 0) {
        toDispatch.push(() => addMultipleRolledDice(diceArray));
        toDispatch.push(() => deleteAllPieceDices(piece.id));
        return toDispatch;
      }
    };
    const findFirstAllowedDice = (piece, diceArray) => {
      let firstAllowedDice = false;
      for (let i = diceArray.length; i > 0; i--) {
        const thisDice = diceArray[i - 1];
        if (Piece.diceIsAllowed(piece, thisDice)) {
          firstAllowedDice = { ...thisDice };
          i = 0;
        }
      }
      return firstAllowedDice;
    };

    if (bag) {
      if (pieceDices && (piece.disabled || piece.completed || piece.full)) {
        returnAllPieceDicesToBag();
        return toDispatch;
      }
      if (selectedDices) {
        ////// piece is [NOT] full / completed / disabled = is waiting
        const firstAllowedDice = findFirstAllowedDice(piece, selectedDices);
        if (firstAllowedDice) {
          toDispatch.push(() =>
            placeBodyPieceDice({ pieceId: piece.id, dice: firstAllowedDice })
          );
          toDispatch.push(() => deleteRolledDice(firstAllowedDice));
          console.log(`Added ${firstAllowedDice.id} to ${piece.id}`);
          return toDispatch;
        } else {
          // have selected dices but none of them can be placed in
          // for now do nothing !!!OPTION!!!
          return toDispatch;
        }
      }

      ////// have [NO] selected dices
      const firstAllowedDice = findFirstAllowedDice(piece, bag);
      if (firstAllowedDice) {
        toDispatch.push(() =>
          placeBodyPieceDice({ pieceId: piece.id, dice: firstAllowedDice })
        );
        toDispatch.push(() => deleteRolledDice(firstAllowedDice));
        console.log(`Added ${firstAllowedDice.id} to ${piece.id}`);
        return toDispatch;
      } else {
        returnAllPieceDicesToBag();
        return toDispatch;
      }
    }

    if (pieceDices) {
      ////// piece has dices
      // automatically cause nothing returned yet
      //////===auto============ bag [NO] have dices  OR   if no dice was placed
      // -> remove all dices
      returnAllPieceDicesToBag();
      return toDispatch;
    }
    return toDispatch; //not needed
  },
  // -----------------------------------------------------------------------------
};
