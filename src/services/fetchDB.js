/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';
axios.defaults.headers.get['Accept'] = 'application/json';

export const tokenToHeader = {
   set(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common['Authorization'] = '';
   },
};

const post = async (url, item = null) => {
   try {
      const { data } = await axios.post(url, item);

      return data;
   } catch (error) {
      throw error;
   }
};

const get = async url => {
   try {
      const { data } = await axios.get(url);

      return data;
   } catch (error) {
      throw error;
   }
};

const del = async url => {
   try {
      await axios.delete(url);
   } catch (error) {
      throw error;
   }
};

export default { post, get, del };
