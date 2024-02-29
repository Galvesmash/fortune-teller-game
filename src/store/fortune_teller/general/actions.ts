import axios from 'axios';
import consts from '@/static/ts/consts';

export default {
  /*
   * POST
   * @param text: string
   * @param target: string
   */
  translate({ commit, state }: any, payload = null) {
    return new Promise((resolve, reject) => {
      axios.post(`https://${state.rapidApiUrl}/translate`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': state.rapidApiUrl,
          'X-RapidAPI-Key': state.rapidApiKey,
        }
      }).then((response) => {
        commit(resolve(response.data[0].result.text));
      }).catch((error) => {
        reject(error);
      });
    })
  },
}