export default {
  setLocale(state: any, payload: any) {
    state.locale = payload;
  },

  setRapidApiKeyGeneral(state: any, payload: any) {
    state.rapidApiKey = payload || '';
  },
};