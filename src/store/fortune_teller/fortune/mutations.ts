export default {
  reset(state: any) {
    state.fortune = '';
    state.fortune_error = false;
    state.fortune_translated = '';
  },

  setFortune(state: any, payload: any) {
    state.fortune = payload;
    state.fortune_error = false;
  },

  setFortuneOptions(state: any, payload: any) {
    state.fortune_options = payload || [];
  },

  setFortuneError(state: any) {
    state.fortune = '';
    state.fortune_error = true;
    state.fortune_translated = '';
  },

  setFortuneTranslated(state: any, payload: any) {
    state.fortune_error = false;
    state.fortune_translated = payload;
  },

  setRapidApiKeyFortune(state: any, payload: any) {
    state.rapidApiKey = payload || '';
  },
};