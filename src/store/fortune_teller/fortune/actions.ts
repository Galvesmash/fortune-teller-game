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
        let answer = response.data.text.split("'")[1].trim();
        console.log(answer);
        resolve(commit('setFortune', answer));
      }).catch((error) => {
        commit('setFortuneError');
        reject(error);
      });
    });
  },
}