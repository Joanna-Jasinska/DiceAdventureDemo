import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectInCombat,
  selectCombat,
  selectEndingTurn,
  selectDices,
  selectRolledDices,
  selectEnemy,
} from "redux/combat/selectors";

// selectLoading = (state) => state.combat.isLoading;
// export const selectError = (state) => state.combat.error;
// export const selectCombat = (state) => state.combat;
// export const selectInCombat = (state) => state.combat.inCombat;
// export const selectDices = (state) => state.combat.dices;
// export const selectRolledDices = (state) => state.rolledDices;
// export const selectEnemy = (state) => state.combat.enemy;
// export const selectEndingTurn = (state) => state.combat.endTurn;

export const useCombat = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const inCombat = useSelector(selectInCombat);
  const combat = useSelector(selectCombat);
  const endTurn = useSelector(selectEndingTurn);
  const enemy = useSelector(selectEnemy);
  const dices = useSelector(selectDices);
  const rolledDices = useSelector(selectRolledDices);

  return {
    error,
    loading,
    inCombat,
    combat,
    endTurn,
    enemy,
    dices,
    rolledDices,
  };
};
