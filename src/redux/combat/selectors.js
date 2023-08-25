export const selectLoading = (state) => state.combat.isLoading;
export const selectError = (state) => state.combat.error;
export const selectCombat = (state) => state.combat;
export const selectInCombat = (state) => state.combat.inCombat;
export const selectDices = (state) => state.combat.dices;
export const selectRolledDices = (state) => state.combat.rolledDices;
export const selectEnemy = (state) => state.combat.enemy;
export const selectEndingTurn = (state) => state.combat.endTurn;
