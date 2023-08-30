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
  clickOnBodyPiece(piece, rolledDices) {
    console.log(`clickOnBodyPiece`);
    const toDispatch = [];
    let finished = false;
    const foundRD = rolledDices;
    // const foundRD = [{}, {}];
    // console.log(`clickOnBodyPiece have foundRD [${foundRD}]`);
    const bag =
      foundRD && Array.isArray(foundRD) && foundRD.length > 0 ? foundRD : false;
    console.log(`clickOnBodyPiece have bag of rolled dices [${bag}]`);
    const foundSD = !!foundRD ? foundRD.filter((dice) => dice.selected) : false;
    // console.log(`clickOnBodyPiece have foundSD [${foundSD}]`);
    const selectedDices =
      foundSD && Array.isArray(foundSD) && foundSD.length > 0 ? foundSD : false;
    console.log(`clickOnBodyPiece have selected dices [${selectedDices}]`);
    const pieceDices =
      piece.dices && Array.isArray(piece.dices) && piece.dices.length > 0
        ? piece.dices
        : false;
    // console.log(`clickOnBodyPiece have pieceDices [${pieceDices}]`);

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
      // -> foreach piece.dice -> combat toDispatch.push(()=>addRolledDice(dice))
      // -> enemy toDispatch.push(()=>clearBodyPieceDices(piece.id))
      //   must change piece statuses - remove piece.disabled || piece.completed || piece.full
    };

    if (bag) {
      if (pieceDices && (piece.disabled || piece.completed || piece.full)) {
        ////// piece has dices ////// piece is full / completed / disabled
        returnAllPieceDicesToBag();
        return toDispatch;
      }
      if (selectedDices) {
        ////// piece is [NOT] full / completed / disabled
        // !!!!AAA!!! calculate pieceIsWaiting
        const pieceIsWaiting = true;
        if (pieceIsWaiting) {
          // ---  --- place first allowed dice from selected
          let firstAllowedDice = false;
          for (let i = selectedDices.length; i > 0; i--) {
            const thisDice = selectedDices[i - 1];
            if (Piece.diceIsAllowed(piece, thisDice)) {
              firstAllowedDice = { ...thisDice };
              i = 0;
            }
          }
          if (firstAllowedDice) {
            // !!!AAA!!!HERE!!!
            // enemy
            toDispatch.push(() =>
              placeBodyPieceDice({ pieceId: piece.id, dice: firstAllowedDice })
            );
            toDispatch.push(() => deleteRolledDice(firstAllowedDice));
            console.log(`Added ${firstAllowedDice.id} to ${piece.id}`);
            return toDispatch;
            finished = true;
          } else {
            // have selected dices but none of them can be placed in
          }
        }
      }
      ////// have [NO] selected dices
      ////// piece is [NOT] full / completed / disabled
      // ---  --- place first allowed dice from bag
      // -> let i = bag.length till 0 -> foreach dice -> Dice.checkAllowed(dice, piece) ->
      //  enemy toDispatch.push(()=>placeBodyPieceDice(piece.id, dice))
      // combat toDispatch.push(()=>withdrawRolledDice(dice.id))
      //  or
    } ////// bag have dices
    //  or

    if (pieceDices) {
      ////// piece has dices
      // automatically cause nothing returned yet
      //////===auto============ bag [NO] have dices  OR   if no dice was placed
      // -> remove all dices
      returnAllPieceDicesToBag();
      return toDispatch;
    } ////// piece has dices
    return toDispatch;
  },
};
