import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = () => ({
  game_options: [],
  game_selection: null,
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};