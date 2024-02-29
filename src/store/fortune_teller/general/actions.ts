import axios from 'axios';
import consts from '@/static/ts/consts';

export default {
  /*
   * POST
   * @param text: string
   * @param target: string
   */
  translate({ commit }: any, payload = null) {
    return new Promise((resolve, reject) => {
      axios.post(consts.ENDPOINTS.TRANSLATE, payload, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': process.env.VUE_APP_RAPID_API_OPENTRANSLATOR_HOST,
          'X-RapidAPI-Key': process.env.VUE_APP_RAPID_API_KEY,
        }
      }).then((response) => {
        commit(resolve(response.data[0].result.text));
      }).catch((error) => {
        reject(error);
      });
    })
  },
}