/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

//axios.defaults.baseURL = 'https://slimmom-backend-node-2-kh.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3100';
axios.defaults.headers.get['Accept'] = 'application/json';

export const tokenToHeader = {
   set(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common['Authorization'] = '';
      axios.defaults.headers.common['Refresh-Authorization'] = '';
   },
   setToken(token, refresh) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.common['Refresh-Authorization'] = `Bearer ${refresh}`;
   },
};

const post = async (url, reqBody = null) => {
   try {
      const { data } = await axios.post(url, reqBody);
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

const del = async (url, reqBody) => {
   try {
      const { data } = await axios.delete(url, { data: reqBody });

      return data;
   } catch (error) {
      throw error;
   }
};

export default { post, get, del };
