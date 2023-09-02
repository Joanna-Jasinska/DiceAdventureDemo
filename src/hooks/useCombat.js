import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectCombat,
  selectInCombat,
  selectEndingTurn,
  selectDices,
  selectRolledDices,
  selectEndCombat,
} from "redux/combat/selectors";

export const useCombat = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const inCombat = useSelector(selectInCombat);
  const combat = useSelector(selectCombat);
  const endTurn = useSelector(selectEndingTurn);
  // const enemy = useSelector(selectEnemy);
  const dices = useSelector(selectDices);
  const rolledDices = useSelector(selectRolledDices);
  const endCombat = useSelector(selectEndCombat);

  return {
    error,
    loading,
    inCombat,
    combat,
    endTurn,
    // enemy,
    dices,
    rolledDices,
    endCombat,
  };
};
