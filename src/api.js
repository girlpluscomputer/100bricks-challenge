import axios from 'axios';

const api = () => {
  const baseUrl = 'https://proxy-100ladrillos.herokuapp.com/';

  const get = route => {
    return axios.get(`${baseUrl}${route}`);
  };

  return {
    get,
  }
};

export default api();