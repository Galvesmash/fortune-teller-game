export default {
  reset(state: any) {
    state.game_options = [];
    state.game_selection = null;
  },

  setGameOptions(state: any, payload: any) {
    state.game_options = payload || [];
  },

  setGameSelection(state: any, payload: any) {
    state.game_selection = payload;
  },
};