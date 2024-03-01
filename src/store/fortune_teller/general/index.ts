import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = () => ({
  availableLocales: [
    'en',
    'pt-br'
  ],
  defaultLocale: 'en',
  locale: '',
  rapidApiUrl: 'opentranslator.p.rapidapi.com',
  rapidApiKey: '',
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};