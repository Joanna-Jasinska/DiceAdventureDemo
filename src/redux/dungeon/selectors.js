export const selectDungeon = (state) => state.dungeon;
export const selectPackedItems = (state) => state.dungeon.items;
export const selectReadyToEnter = (state) => state.dungeon.readyToEnter;
export const selectAvailableEnemies = (state) => state.dungeon.enemies;
export const selectAvailableBosses = (state) => state.dungeon.bosses;
export const selectAlly = (state) => state.dungeon.ally;
export const selectError = (state) => state.dungeon.error;
export const selectLoading = (state) => state.dungeon.isLoading;
export const selectInDungeon = (state) => state.dungeon.inDungeon;
export const selectDungeonLv = (state) => state.dungeon.lv;
export const selectDungeonBg = (state) => state.dungeon.background;
export const selectLv = (state) => state.dungeon.lv;
export const selectStartedLv = (state) => state.dungeon.startedLv;
export const selectGoldEarned = (state) => state.dungeon.goldEarned;
export const selectSlotsDefeated = (state) => state.dungeon.slotsDefeated;
export const selectCurrentSlot = (state) => state.dungeon.currentSlot;
export const selectPlayer = (state) => state.dungeon.player;
export const selectPlayerLife = (state) => state.dungeon.player.life;

// id: "dungeon|1|",
//   startedLv: 1,
//   goldEarned: 0,
