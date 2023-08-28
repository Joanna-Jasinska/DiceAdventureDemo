export const selectError = (state) => state.game.error;
export const selectLoading = (state) => state.game.isLoading;

export const selectGame = (state) => state.game;
export const selectCurrentDungeons = (state) => state.game.currentDungeons;
export const selectPossibleDungeons = (state) => state.game.possibleDungeons;
export const selectDungeonLevels = (state) => state.game.dungeonLevels;
export const selectPlayerLv = (state) => state.game.playerLv;
export const selectMaxEqLv = (state) => state.game.maxEqLv;
export const selectSpareLvUps = (state) => state.game.spareLvUps;
export const selectGold = (state) => state.game.gold;
export const selectSelectedDungeonId = (state) => state.game.selectedDungeonId;
