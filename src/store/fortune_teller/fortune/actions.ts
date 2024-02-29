import axios from 'axios';
import consts from '@/static/ts/consts';

export default {
  /*
   * GET
   */
  getFortune({ commit, state }: any) {
    return new Promise((resolve, reject) => {
      axios.get(`https://${state.rapidApiUrl}/slack`, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': state.rapidApiUrl,
          'X-RapidAPI-Key': state.rapidApiKey,
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