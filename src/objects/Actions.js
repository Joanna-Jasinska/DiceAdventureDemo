import { useCombat } from "hooks";

export const Actions = {
  clickOnBodyPiece(piece) {
    const toDispatch = [];
    let finished = false;
    const foundRD = useCombat.rolledDices;
    const bag =
      foundRD & Array.isArray(foundRD) & (foundRD.length > 0) ? foundRD : false;
    const foundSD = bag ? bag.filter((dice) => dice.selected) : false;
    const selectedDices =
      foundSD & Array.isArray(foundSD) & (foundSD.length > 0) ? foundSD : false;
    const pieceDices =
      piece.dices & Array.isArray(piece.dices) & (piece.dices.length > 0)
        ? piece.dices
        : false;

    const returnAllPieceDicesToBag = () => {
      // -> foreach piece.dice -> combat toDispatch.push(()=>addRolledDice(dice))
      // -> enemy toDispatch.push(()=>clearBodyPieceDices(piece.id))
      //   must change piece statuses - remove piece.disabled || piece.completed || piece.full
    };

    if (bag) {
      if (pieceDices & (piece.disabled || piece.completed || piece.full)) {
        ////// piece has dices ////// piece is full / completed / disabled
        returnAllPieceDicesToBag();
        return toDispatch;
      }
      if (selectedDices) {
        ////// piece is [NOT] full / completed / disabled
        // ---  --- place first allowed dice from selected
        // -> let i = bag. filter selected dice .length till 0 -> foreach dice -> Dice.checkAllowed(dice, piece) ->
        //  enemy toDispatch.push(()=>placeBodyPieceDice(piece.id, dice))
        // combat toDispatch.push(()=>withdrawRolledDice(dice.id))
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
    } ////// piece has dices
    return toDispatch;
  },
};
