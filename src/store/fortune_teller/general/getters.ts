export default {
  getAvailableLocales: (state: any) => {
    return state.availableLocales;
  },

  getDefaultLocale: (state: any) => {
    return state.defaultLocale;
  },

  getLocale: (state: any) => {
    return state.locale;
  },
};