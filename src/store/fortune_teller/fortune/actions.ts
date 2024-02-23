import axios from 'axios';
import consts from '@/static/ts/consts';

export default {
  /*
   * GET
   */
  getFortune({ commit }: any) {
    return new Promise((resolve, reject) => {
      axios.get(consts.ENDPOINTS.GET_FORTUNE, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': process.env.VUE_APP_RAPID_API_FORTUNE_HOST,
          'X-RapidAPI-Key': process.env.VUE_APP_RAPID_API_KEY,
        }
      }).then((response) => {
        resolve(commit('setFortune', response.data.text.split("'")[1].trim()));
      }).catch((error) => {
        commit('setFortuneError');
        reject(error);
      });
    });
  },
}