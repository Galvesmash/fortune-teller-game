export default {
  getFortune: (state: any) => {
    return state.fortune;
  },

  getFortuneError: (state: any) => {
    return state.fortune_error;
  },

  getFortuneOptions: (state: any) => {
    return state.fortune_options;
  },

  getFortuneTranslated: (state: any) => {
    return state.fortune_translated;
  },
};