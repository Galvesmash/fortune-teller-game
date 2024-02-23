const consts: any = {
  ENDPOINTS: {
    GET_FORTUNE: `https://${process.env.VUE_APP_RAPID_API_FORTUNE_HOST}/slack`,
    TRANSLATE: `https://${process.env.VUE_APP_RAPID_API_OPENTRANSLATOR_HOST}/translate`,
  },
};

for (const x in consts) {
  consts[x] = Object.freeze(consts[x]);
}

export default consts;
export const namespaced = true;